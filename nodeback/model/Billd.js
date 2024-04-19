const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  country: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  clientId: {
    type: mongoose.Schema.ObjectId,
    require: "Client",
  },
  city: {
    type: String,
    require: true,
  },
  postCode: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  Gst: {
    type: Number,
    require: true,
  },
  panNo: {
    type: String,
    require: true,
  },
  isConfirmed: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Billed", billSchema);
