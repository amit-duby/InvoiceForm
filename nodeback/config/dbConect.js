const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.set("strictQuery", true);
  const conne = mongoose
    .connect(process.env.MONGODB_URL, {
  //     useNewUrlParser: true,
  // useUnifiedTopology: true,
  // tls: true, // Ensures that TLS is used
  // tlsInsecure: false, // Prevents insecure connections
  // tlsAllowInvalidCertificates: false, // Rejects invalid certificates
    })

    .then((data) => {
      console.log(`mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDB;
