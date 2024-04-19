const mongoose = require("mongoose");

const shippedSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    requre: true,
  },
  address: {
    type: String,
    // requre: true,
  },
  state: {
    type: String,
    // require: true,
  },
  city: {
    type: String,
    // require: true,
  },
  vehicle: {
    type: String,
    // required: true,
  },
  vehicleNo: {
    type: Number,
    // required: true,
  },
  vehicleType: {
    type: String,
    // required: true,
  },
  supply: {
    type: String,
    // required: true,
  },
  transport: {
    type: String,
    // required: true,
  },
  challanNo: {
    type: Number,
    // required: true,
  },
  challan: {
    type: Object,
    // required: true,
  },
});

module.exports = mongoose.model("Shipped", shippedSchema);
