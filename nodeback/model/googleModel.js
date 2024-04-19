const mongoose = require("mongoose");

const googleSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
    },
    displayName: {
      type: String,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const userdb = mongoose.model("google", googleSchema);
module.exports = userdb;
