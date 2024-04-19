const Oner = require("../model/Billd.js");
const AppError = require("../utill/apperror.js");

exports.CreateBillder = async (req, res, next) => {
  try {
    console.log(req.body);
    const newBiller = await Oner.create(req.body);
    console.log(newBiller);
    if (!newBiller) {
      throw new AppError("form does not created", 400);
    }
    res.status(200).json({
      status: "success",
      newBiller,
    });
  } catch (error) {
    next(error);
  }
};

// getBiller
exports.GetAllBilleder = async (req, res, next) => {
  try {
    const getBillers = await Oner.find();
    if (!getBillers) {
      throw new AppError("does not get Billers", 401);
    }
    res.status(200).json({
      status: "success",
      data: getBillers,
    });
  } catch (error) {
    next(error);
  }
};

// get single Biller
exports.getBillers = async (req, res, next) => {
  try {
    const billerData = await Oner.findById(req.params.id);
    if (!billerData) {
      throw new AppError("Biller id does not find", 401);
    }
    res.status(200).json({
      status: "success",
      data: billerData,
    });
  } catch (error) {
    next(error);
  }
};

// update Billers
exports.updateBilder = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updateData = await Oner.findByIdAndUpdate(userId, req.body, {
      isActive: true,
      runValidators: true,
    });
    if (!updateData) {
      throw new AppError("biller id does not find", 400);
    }
    res.status(200).json({
      status: "success",
      data: updateData,
    });
  } catch (error) {
    next(error);
  }
};

// deleteBiller
exports.deleteBillers = async (req, res, next) => {
  try {
    const deleteDate = await Oner.findByIdAndDelete(req.params.id);
    if (!deleteDate) {
      throw new AppError("biller id does not find", 400);
    }
    res.status(200).json({
      status: "success",
      data: deleteDate,
    });
  } catch (eror) {
    next(eror);
  }
};
