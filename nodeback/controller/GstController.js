const Gst = require("../model/GstModel");
const AppError = require("../utill/apperror");

exports.gstController = async (req, res, next) => {
  try {
    const data = await Gst.create(req.body);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllGst = async (req, res, next) => {
  try {
    const getTex = await Gst.find();
    if (!getTex) {
      AppError("gst not found", 400);
    }
    res.status(200).json({
      status: "success",
      getTex,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getOneGst = async (req, res, next) => {
  try {
    const gettexs = await Gst.findById(req.params.id);
    if (!gettexs) {
      AppError("gettexs do not find", 401);
    }
    res.status(200).json({
      status: "success",
      gettexs,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateGst = async (req, res, next) => {
  try {
    const update = await Gst.findByIdAndUpdate(req.params.id, req.body);
    if (!update) {
      AppError("con not updated gst ", 400);
    }
    res.status(200).json({
      status: "success",
      update,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deletedGst = async (req, res, next) => {
  try {
    const deleteGst = await Gst.findByIdAndDelete(req.params.id);
    if (!deleteGst) {
      AppError("con not deletedGst ", 400);
    }
    res.status(200).json({
      status: "success",
      deleteGst,
    });
  } catch (error) {
    console.log(error);
  }
};
