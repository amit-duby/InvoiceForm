const mongoose = require("mongoose");

const ExtraDetailsSchema = new mongoose.Schema({
  term: {
    type: String,
    required: true,
  },
  group: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  notes: {
    type: Number,
    required: true,
  },

  contactInfo: {
    type: Number,
    required: true,
  },
  additionalInfo: {
    type: String,
    required: true,
  },
  image: {
    url: { type: String, required: true },
  },
  signature: {
    type: String,
    required: true,
  },

  labal: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("extra", ExtraDetailsSchema);
