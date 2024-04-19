const Invoic = require("../model/invoice.js");
const AppError = require("../utill/apperror.js");

const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dvxceod63",
  api_key: "836317862267872",
  api_secret: "mgPsLSLqIvtxpjDFobkGiRuStsk",
});

exports.createInvoice = async (req, res, next) => {
  try {
    // const file = req.files.image;
    const result = await cloudinary.uploader.upload(req.file.path);

    const { invoiceNo, name, invoiceDate, dueDate } = req.body;
    const newInvice = await Invoic({
      invoiceNo: invoiceNo,
      name: name,
      invoiceDate: invoiceDate,
      dueDate: dueDate,
      image: {
        url: result.secure_url,
      },
    });
    const invoicedata = await newInvice.save();
    if (!invoicedata) {
      throw new AppError(
        "does not created InvoiceData Please check again create",
        400
      );
    }
    res.status(200).json({
      status: "success",
      data: invoicedata,
    });
    console.log(invoicedata);
  } catch (error) {
    next(error);
  }
};

// alll invoic
exports.getAllInvoic = async (req, res, next) => {
  try {
    const AllInvoiceData = await Invoic.find();
    if (!AllInvoiceData) {
      throw new AppError("does not get AllInvoiceDate", 400);
    }
    res.status(200).json({
      status: "success",
      data: AllInvoiceData,
    });
  } catch (error) {
    next(error);
  }
};

// single data
exports.getSingleInvoice = async (req, res, next) => {
  try {
    const invoiceDate = await Invoic.findById(req.params.id);
    if (!invoiceDate) {
      throw new AppError("Invoice Id is not find", 401);
    }
    res.status(201).json({
      status: "success",
      data: invoiceDate,
    });
  } catch (error) {
    next(error);
  }
};

// update invoice
exports.updateInvoice = async (req, res, next) => {
  try {
    const UserId = req.params.id;
    const updateDate = await Invoic.findByIdAndUpdate(UserId, req.body, {
      isActive: true,
      runValidators: true,
    });
    if (!updateDate) {
      throw new AppError("find Id and update Invoice Form", 402);
    }
    console.log(updateDate);
    res.status(202).json({
      status: "success",
      data: updateDate,
    });
  } catch (error) {
    next(error);
  }
};

// delete Invoice
exports.deleteInvoice = async (req, res, next) => {
  try {
    const UserId = req.params.id;
    const deleteDate = await Invoic.findByIdAndDelete(UserId);
    if (!deleteDate) {
      throw new AppError(
        "Invoice Id does not find Plese find Invice Id after delete",
        400
      );
    }

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
exports.imageUpload = async (req, res, next) => {
  // console.log("image is uploaded", req.files);
  try {
    // const file = req.file;
    const result = await cloudinary.uploader.upload(req.File.path);
    console.log(result);
    res.json({
      public_id: result.public_id,
      url: result.secure_url,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
