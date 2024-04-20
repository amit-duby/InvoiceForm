const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.set("strictQuery", true);
  const conne = mongoose
    .connect(process.env.MONGODB_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      // useNewUrlParser: true,
    })

    .then((data) => {
      console.log(`mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDB;
