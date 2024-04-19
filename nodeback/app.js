const express = require("express");
const app = express();
const connectDB = require("./config/dbConect.js");
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./model/googleModel.js");
const bodyParser = require("body-parser");
const invo = require("./route/invoicRoutes.js");
const gst = require("./route/GstRouters.js");
// google varification

const clientId =
  "498259257497-9po0cb8s5e61tc7a89hr5n67gi1bojkv.apps.googleusercontent.com";
const clientsecret = "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";
const cors = require("cors");

// Configure env
require("dotenv").config();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// route config
app.use("/api/v1", invo);
app.use("/api/v1/gs", gst);
// Google Auth middleware
app.use(
  session({
    secret: "253545ghjhiukllkuuytttrg44hykkk",
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
      clientID: clientId,
      clientSecret: clientsecret,
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
    successRedirect: "http://localhost:3000",
    failureRedirect: "http://localhost:3000/login",
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