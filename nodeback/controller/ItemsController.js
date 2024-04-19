const Items = require("../model/ItemsModel");
const AppError = require("../utill/apperror");

exports.itemsController = async (req, res, next) => {
  try {
    const data = await Items.create(req.body);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllItems = async (req, res, next) => {
  try {
    const getItems = await Items.find();
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

exports.getOneItems = async (req, res, next) => {
  try {
    const getItems = await Items.findById(req.params.id);
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

exports.updateItems = async (req, res, next) => {
  try {
    const updatedItems = await Items.findByIdAndUpdate(req.params.id, req.body);
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

exports.deletedItems = async (req, res, next) => {
  try {
    const deleteItems = await Items.findByIdAndDelete(req.params.id);
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
