const shipped = require("../model/shipped.js");
const AppError = require("../utill/apperror.js");

exports.createShipped = async (req, res, next) => {
  try {
    const newShipped = await shipped.create(req.body);
    res.status(200).json({
      status: "success",
      data: newShipped,
    });
  } catch (error) {
    next(error);
  }
};

// getALl Shipped data

exports.GetAllShipped = async (req, res, next) => {
  try {
    const shippeds = await shipped.find();
    if (!shippeds) {
      throw new AppError("shipped does not find", 400);
    }
    res.status(200).json({
      status: "success",
      data: shippeds,
    });
  } catch (error) {
    next(error);
  }
};

// getshippedBy id data

exports.GetShippedById = async (req, res, next) => {
  try {
    const shippedById = await shipped.findById(req.params.id);
    if (!shippedById) {
      throw new AppError("shipped id does not find", 400);
    }
    res.status(200).json({
      status: "success",
      data: shippedById,
    });
  } catch (error) {
    next(error);
  }
};

// updateshipped data

exports.updateShippedById = async (req, res, next) => {
  try {
    const updateByShippedId = await shipped.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        isActive: true,
      }
    );
    if (!updateByShippedId) {
      throw new AppError("shipped id does not find please try again", 400);
    }
    res.status(200).json({
      status: "success",
      data: updateByShippedId,
    });
  } catch (error) {
    next(error);
  }
};

// delete shippedById

exports.deleteShippedById = async (req, res, next) => {
  try {
    const deletedByShippedId = await shipped.findByIdAndDelete(req.params.id);
    if (!deletedByShippedId) {
      throw new AppError("shipped id does not find please try again ", 400);
    }
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

// client
exports.ClientController = async (req, res, next) => {
  try {
    const client = await shipped.create(req.body);
    res.status(200).json({
      status: "success",
      data: client,
    });
  } catch (error) {
    next(error);
  }
};
// vehicles
exports.TransportController = async (req, res, next) => {
  try {
    const transport = await shipped.create(req.body);
    res.status(200).json({
      status: "success",
      data: transport,
    });
  } catch (error) {
    next(error);
  }
};
