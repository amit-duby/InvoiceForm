const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },

  total: {
    type: Number,
    required: true,
  },
  charges: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("items", ItemsSchema);
