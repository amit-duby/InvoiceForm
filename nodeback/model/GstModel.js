const mongoose = require("mongoose");

const GstSchema = new mongoose.Schema({
  tax: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },

  currencyN: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("gst", GstSchema);
