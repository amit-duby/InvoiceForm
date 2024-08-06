const Invoic = require("../model/invoice.js");
const User = require("../model/userModel");
const AppError = require("../utill/apperror.js");
// const path = require("path");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");

cloudinary.config({
  cloud_name: "dvxceod63",
  api_key: "836317862267872",
  api_secret: "mgPsLSLqIvtxpjDFobkGiRuStsk",
});

exports.createInvoice = async (req, res, next) => {
  try {
    // First, find the user by userId
    // const userId = req.body.userId || req.users.id; // Use the provided userId or the authenticated user's ID

    // Check if files exist in the request
    if (!req.files || !req.files.photo || !req.files.document) {
      return res.status(400).json({
        status: "error",
        message: "Missing required files (photo and document)",
      });
    }

    const file = req.files.photo;
    const file1 = req.files.document;

    const documentResult = await cloudinary.uploader.upload(file1.tempFilePath);
    const result = await cloudinary.uploader.upload(file.tempFilePath);

    const {
      invoiceNo,
      invoiceDate,
      dueDate,
      email,
      email1,
      signatuelable,
      Billtobusiness,
      Billbybusiness,
      Billtogst,
      Billbygst,
      Billtopostal,
      Billbypostal,
      Billtocity,
      Billbycity,
      Billtopan,
      Billbypan,
      Billtoaddress,
      Billbyaddress,
      Shippedtoaddress,
      Shippedbyaddress,
      Shippedtobusiness,
      Shippedbybusiness,
      Shippedtocity,
      Shippedbycity,
      Shippedtopostal,
      Shippedbypostal,
      Shippedtostate,
      Shippedbystate,
      distance,
      modeTrasport,
      vehicleType,
      vehicleNumber,
      supplyType,
      challanNumber,
      challanDate,
      transportType,
      Billbycountry,
      Billtocountry,
      Billbyregion,
      Billtoregion,
      Billtophone,
      Billbyphone,
      Shippedbycountry,
      addphone,
      Shippedtocountry,
      // checkbox,
      addShippingDetails,
      signatureData,
      description,
      content,
      addterm,
      inputSets1,
      inputSets2,
      inputSets3,
      gstinputSets,
      Shippedbycheckbox,
      Shippedtocheckbox,
      saveToClientDetails,
      addinputSets,
      addemail,
      userId,
    } = req.body;

    const newInvoice = new Invoic({
      invoiceNo,
      invoiceDate,
      dueDate,
      email,
      email1,
      signatuelable,

      Billtobusiness,
      Billbybusiness,
      Billtogst,
      Billbygst,
      Billtopostal,
      Billbypostal,
      Billtocity,
      Billbycity,
      Billtopan,
      Billbypan,
      Billtoaddress,
      Billbyaddress,
      Shippedtoaddress,
      Shippedbyaddress,
      Shippedtobusiness,
      Shippedbybusiness,
      Shippedtocity,
      Shippedbycity,
      Shippedtopostal,
      Shippedbypostal,
      Shippedtostate,
      Shippedbystate,
      distance,
      modeTrasport,
      vehicleType,
      vehicleNumber,
      supplyType,
      challanNumber,
      challanDate,
      transportType,
      Billbycountry,
      Billtocountry,
      Billbyregion,
      Billtoregion,
      Billtophone,
      Billbyphone,
      Shippedbycountry,
      addphone,
      Shippedtocountry,
      // checkbox,
      addShippingDetails: addShippingDetails,
      Shippedbycheckbox,
      Shippedtocheckbox,
      saveToClientDetails,
      content,
      addterm,
      addemail,
      description,
      inputSets1,
      inputSets2,
      inputSets3,
      gstinputSets,
      addinputSets,
      image: { url: result.secure_url },
      document: { url: documentResult.secure_url },
      signatureData,
      userId,
    });

    const invoiceData = await newInvoice.save();
    console.log(invoiceData, "dfsdfsd");
    res.status(201).json({
      status: "success",
      data: invoiceData,
    });
    console.log("Invoice data:", invoiceData);
  } catch (error) {
    console.error("Error creating invoice:", error);
    next(error);
  }
};

// invoiceByUserId
exports.getInvoicesByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    console.log("User ID:", userId);

    const invoiceData = await Invoic.find({ userId: userId });

    if (!invoiceData || invoiceData.length === 0) {
      return next(new AppError("No invoices found for this user", 404));
    }

    res.status(200).json({
      status: "success",
      results: invoiceData.length,
      data: invoiceData,
    });
  } catch (error) {
    next(error);
  }
};
// invoiceByUserId
exports.getSingleInvoicesByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    console.log("User ID:", userId);

    const invoiceData = await Invoic.findOne({ userId: userId });

    if (!invoiceData || invoiceData.length === 0) {
      return next(new AppError("No invoices found for this user", 404));
    }

    res.status(200).json({
      status: "success",
      results: invoiceData.length,
      data: invoiceData,
    });
  } catch (error) {
    next(error);
  }
};
exports.getAllInvoice = async (req, res, next) => {
  try {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const size = req.query.size ? parseInt(req.query.size) : 2;
    const order = req.query.order === "asc" ? 1 : -1; // Default to descending order if not specified

    const skip = (page - 1) * size;
    const total = await Invoic.countDocuments();

    const invoiceData = await Invoic.find()
      .skip(skip)
      .limit(size)
      .sort({ createdAt: order });

    if (!invoiceData.length) {
      throw new AppError("No invoices found", 404);
    }

    res.status(200).json({
      status: "success",
      data: invoiceData,
      total,
      page,
      size,
      order: order === 1 ? "asc" : "desc",
    });
  } catch (error) {
    next(error);
  }
};

// single data
exports.getSingleInvoice = async (req, res, next) => {
  try {
    const invoiceData = await Invoic.findById(req.params.id);
    if (!invoiceData) {
      throw new AppError("Invoice Id is not find", 401);
    }
    res.status(201).json({
      status: "success",
      data: invoiceData,
    });
  } catch (error) {
    next(error);
  }
};

// update invoice
exports.updateInvoiceById = async (req, res, next) => {
  try {
    const invoiceId = req.params.id;
    const updateData = req.body;
    console.log(invoiceId);
    if (!mongoose.Types.ObjectId.isValid(invoiceId)) {
      throw new AppError("Invalid invoice ID", 400);
    }

    const invoice = await Invoic.findById(invoiceId);
    if (!invoice) {
      throw new AppError("This invoice ID was not found", 404);
    }
    console.log(invoice, "invoiceById");
    // Handle image upload
    if (req.files && (req.files.photo || req.files.document)) {
      if (req.files.document) {
        const file1 = req.files.document;
        try {
          const documentResult = await cloudinary.uploader.upload(
            file1.tempFilePath
          );
          console.log(documentResult, "Document upload result");
          updateData.document = { url: documentResult.secure_url };
        } catch (error) {
          console.error("Error uploading document:", error);
        }
      }

      if (req.files.photo) {
        const file = req.files.photo;
        try {
          const result = await cloudinary.uploader.upload(file.tempFilePath);
          console.log(result, "Photo upload result");
          updateData.image = { url: result.secure_url };
        } catch (error) {
          console.error("Error uploading photo:", error);
        }
      }
    }

    const updatedInvoice = await Invoic.findByIdAndUpdate(
      invoiceId,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );
    console.log(updatedInvoice, "ldill");

    if (!updatedInvoice) {
      throw new AppError("Failed to update invoice", 500);
    }

    res.status(200).json({
      status: "success",
      data: updatedInvoice,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};
// update invoiceByUserId
exports.updateInvoiceByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const updateData = req.body;
    console.log(userId);
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new AppError("Invalid invoice ID", 400);
    }

    const invoice = await Invoic.findOne({ userId: userId });
    if (!invoice) {
      throw new AppError("This invoice ID was not found", 404);
    }
    console.log(invoice, "invoiceById");
    // Handle image upload
    if (req.files && (req.files.photo || req.files.document)) {
      if (req.files.document) {
        const file1 = req.files.document;
        try {
          const documentResult = await cloudinary.uploader.upload(
            file1.tempFilePath
          );
          console.log(documentResult, "Document upload result");
          updateData.document = { url: documentResult.secure_url };
        } catch (error) {
          console.error("Error uploading document:", error);
        }
      }

      if (req.files.photo) {
        const file = req.files.photo;
        try {
          const result = await cloudinary.uploader.upload(file.tempFilePath);
          console.log(result, "Photo upload result");
          updateData.image = { url: result.secure_url };
        } catch (error) {
          console.error("Error uploading photo:", error);
        }
      }
    }

    const updatedInvoice = await Invoic.findOneAndUpdate(
      { userId: userId },
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );
    console.log(updatedInvoice, "ldill");

    if (!updatedInvoice) {
      throw new AppError("Failed to update invoice", 500);
    }

    res.status(200).json({
      status: "success",
      data: updatedInvoice,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};
// delete Invoice
exports.deleteInvoice = async (req, res, next) => {
  try {
    const invoice = await Invoic.findById(req.params.id);

    if (!invoice) {
      return res
        .status(404)
        .json({ status: "fail", message: "Invoice not found" });
    }
    if (invoice.image && invoice.image.url) {
      // Extract the public_id of the image from the secure_url
      const publicId = invoice.image.url.split("/").pop().split(".")[0];

      // Delete the image from Cloudinary
      await cloudinary.uploader.destroy(publicId);
    }
    if (invoice.document && invoice.document.url) {
      const publicId = invoice.document.url.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }
    // Delete the invoice from the database
    // if (req.params.id) {
    await Invoic.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Invoice and image deleted successfully",
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};
exports.imageUpload = async (req, res, next) => {
  // console.log("image is uploaded", req.files);
  try {
    const file = req.files;
    if (file) {
      const result = await cloudinary.uploader.upload(req.file.path);

      console.log(result);
    }
    res.json({
      // public_id: result.public_id,
      url: result.secure_url,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.SearchInvoicecollection = async (req, res, next) => {
  try {
    const key = req.params.key; // Get search query fro      m request parameters

    const invoiceResults = await Invoic.find({
      $or: [
        { name: { $regex: key, $options: "i" } }, // Case-insensitive search by name
        { country: { $regex: key, $options: "i" } }, // Case-insensitive search by description
      ],
    });

    // Return search results
    console.log(invoiceResults);
    res.status(200).json({
      status: "success",
      data: invoiceResults,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

// delete InvoiceByUserId
exports.deleteInvoiceByUserId = async (req, res, next) => {
  try {
    const invoice = await Invoic.findOne({ userId: req.params.userId });

    if (!invoice) {
      return res
        .status(404)
        .json({ status: "fail", message: "Invoice not found" });
    }

    // Delete image from Cloudinary if it exists
    if (invoice.image && invoice.image.url) {
      const publicId = invoice.image.url.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }

    // Delete document from Cloudinary if it exists
    if (invoice.document && invoice.document.url) {
      const publicId = invoice.document.url.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }

    // Delete the invoice from the database
    await Invoic.findOneAndDelete({ userId: req.params.userId });

    res.status(200).json({
      status: "success",
      message: "Invoice, image, and document deleted successfully",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// findByUser

exports.findUserByInvoice = async (req, res, next) => {
  try {
    // Extract the invoice ID from request parameters
    const invoiceId = req.params.id;

    // Find the invoice by its ID
    const invoice = await Invoic.findById(invoiceId);
    console.log(invoice, "invoicedata");
    if (!invoice) {
      return res.status(404).json({
        success: false,
        message: "This invoice ID was not found",
      });
    }

    // Find the user associated with the invoice
    // Assuming userId is a single ID, not an array
    const userId = invoice.userId;
    console.log(userId, "invoiI");
    const user = await User.findById(invoice.userId);
    console.log(user, "userId");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No user found for this invoice",
      });
    }

    // Return the user data
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    // Log the error and send a response back to the client
    console.error("Error in findUserByInvoice:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
