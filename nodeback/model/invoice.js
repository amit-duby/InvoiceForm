const mongoose = require("mongoose");

const invoicSchema = new mongoose.Schema(
  {
    invoiceNo: {
      type: String,
      require: true,
    },
    invoiceDate: {
      type: Object,
      require: true,
    },
    dueDate: {
      type: Object,
      require: true,
    },
    image: {
      url: {
        type: String,
        require: true,
      },
    },

    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoicSchema);
