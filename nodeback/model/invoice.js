const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      // required: true,
    },
    invoiceNo: {
      type: String,
      unique: true,
      // required: true,
    },
    invoiceDate: {
      type: Date,
      // required: true,
    },
    dueDate: {
      type: Date,
      // required: true,
    },
    image: {
      url: {
        type: String,
        // required: true,
      },
    },
    document: {
      url: {
        type: String,
        // required: true,
      },
    },
    signatuelable: {
      type: String,
      // required: true,
    },
    inputSets1: [],
    inputSets2: [],
    inputSets3: [],
    gstinputSets: [],
    addinputSets: [],
    Billtogst: {
      type: String,
      // required: true,
    },
    Billbygst: {
      type: String,
      // required: true,
    },
    Billtoaddress: {
      type: String,
      // required: true,
    },
    Billbyaddress: {
      type: String,
      // required: true,
    },
    Billtocity: {
      type: String,
      // required: true,
    },
    Billbycity: {
      type: String,
      // required: true,
    },
    addShippingDetails: {
      type: Boolean,
      default: false,
    },
    Shippedbycheckbox: {
      type: Boolean,
      default: false,
    },
    Shippedtocheckbox: {
      type: Boolean,
      default: false,
    },
    saveToClientDetails: {
      type: Boolean,
      default: false,
    },
    Billbypostal: {
      type: String,
      // required: true,
    },
    Billtopostal: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    email1: {
      type: String,
      // required: true,
    },
    Billtopan: {
      type: String,
      // required: true,
    },
    Billbypan: {
      type: String,
      // required: true,
    },
    Billbybusiness: {
      type: String,
      // required: true,
    },
    Billtobusiness: {
      type: String,
      // required: true,
    },
    Shippedtobusiness: {
      type: String,
      // required: true,
    },
    Shippedbybusiness: {
      type: String,
      // required: true,
    },
    Shippedtoaddress: {
      type: String,
      // required: true,
    },
    Shippedbyaddress: {
      type: String,
      // required: true,
    },
    Shippedtocity: {
      type: String,
      // required: true,
    },
    Shippedbycity: {
      type: String,
      // required: true,
    },
    Shippedtopostal: {
      type: String,
      // required: true,/
    },
    Shippedbypostal: {
      type: String,
      // required: true,
    },
    Shippedtostate: {
      type: String,
      // required: true,
    },
    Shippedbystate: {
      type: String,
      // required: true,
    },
    Shippedbycountry: {
      type: String,
      // required: true,
    },
    Shippedtocountry: {
      type: String,
      // required: true,
    },
    Billtocountry: {
      type: String,
      // required: true,
    },
    Billbycountry: {
      type: String,
      // required: true,
    },
    Billtophone: {
      type: String,
      // required: true,
    },
    Billbyphone: {
      type: String,
      // required: true,
    },
    addphone: {
      type: String,
    },
    Billbyregion: {
      type: String,
    },
    Billtoregion: {
      type: String,
    },
    distance: {
      type: Number,
      // required: true,
    },
    modeTrasport: {
      type: String,
      // required: true,
    },
    challanNumber: {
      type: String,
      // required: true,
    },
    challanDate: {
      type: Date,
      // required: true,
    },
    vehicleType: {
      type: String,
      // required: true,
    },
    vehicleNumber: {
      type: String,
      // required: true,
    },
    transportType: {
      type: String,
      // required: true,
    },
    supplyType: {
      type: String,
      // required: true,
    },
    checkbox: {
      type: Boolean,
    },
    signatureData: {
      type: String,
      // required: true,
    },
    total: {
      type: String,
    },
    content: {
      type: String,
    },
    addterm: {
      type: String,
    },
    addemail: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
