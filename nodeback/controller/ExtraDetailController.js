const Extra = require("../model/ItemsModel");
const AppError = require("../utill/apperror");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dvxceod63",
  api_key: "836317862267872",
  api_secret: "mgPsLSLqIvtxpjDFobkGiRuStsk",
});
exports.extraDetailController = async (req, res, next) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const data = await Extra.create(req.body, {
      image: {
        url: result.secure_url,
      },
    });
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllDtails = async (req, res, next) => {
  try {
    const getItems = await Extra.find();
    if (!getItems) {
      AppError("Items not found", 400);
    }
    res.status(200).json({
      status: "success",
      getItems,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getOneDetails = async (req, res, next) => {
  try {
    const getItems = await Extra.findById(req.params.id);
    if (!getItems) {
      AppError("gettexs do not find", 401);
    }
    res.status(200).json({
      status: "success",
      getItems,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateDetails = async (req, res, next) => {
  try {
    const updatedItems = await Extra.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedItems) {
      AppError("con not updated Items ", 400);
    }
    res.status(200).json({
      status: "success",
      updatedItems,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteDetails = async (req, res, next) => {
  try {
    const deleteItems = await Extra.findByIdAndDelete(req.params.id);
    if (!deleteItems) {
      AppError("con not deletedItems ", 400);
    }
    res.status(200).json({
      status: "success",
      deleteItems,
    });
  } catch (error) {
    console.log(error);
  }
};
