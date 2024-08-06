const express = require("express");
const app = express();
const connectDB = require("./config/dbConect.js");
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./model/googleModel.js");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const invo = require("./route/invoicRoutes.js");
const fileUpload = require("express-fileupload");
const path = require("path");
// Configure env
require("dotenv").config();

// Connect to MongoDB
connectDB();

const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    // tempFileDir: "/tmp/",
  })
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());
app.use(bodyParser.json({ limit: "10mb" }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get("*", (req, res) => {
//   // res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });
// route config
app.use("/api/v1", invo);

// Google Auth middleware
app.use(
  session({
    secret: process.env.GOOGLESECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

//Google  setuppassport
app.use(passport.initialize());
app.use(passport.session());

// Google config
passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.GOOGLECLIENT_ID,
      clientSecret: process.env.GOOGLECLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      try {
        let user = await userdb.findOne({ googleId: profile.id });
        if (!user) {
          user = new userdb({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value || "",
            image: profile.photos[0].value || "",
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// initial google ouath login
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.SUCCESSREDIRECT,
    failureRedirect: process.env.FAILUREREDIRECT,
  })
);

// middleware
app.use((error, req, res, next) => {
  try {
    const stack = error.stack || "";
    const message = error.message || "";
    const statusCode = error.statusCode || 500;
    console.log(stack);
    console.log(message);

    res.status(statusCode).json({
      status: "error",
      message,
      stack,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
});
//
const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
