const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.set("strictQuery", true);
  const conne = mongoose
    .connect("mongodb://localhost:27017/Form", {
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
