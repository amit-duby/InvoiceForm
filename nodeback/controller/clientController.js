const Client = require("../model/Billd.js");
const AppError = require("../utill/apperror.js");

exports.createClient = async (req, res, next) => {
  try {
    const newClient = await Client.create(req.body);
    res.status(200).json({
      status: "success",
      data: newClient,
    });
  } catch (error) {
    next(error);
  }
};
// getClientdata
exports.GetAllClientData = async (req, res, next) => {
  try {
    const clientData = await Client.find();
    if (!clientData) {
      throw new AppError("ClientData does not find", 400);
    }
    res.status(200).json({
      status: "success",
      data: clientData,
    });
  } catch (error) {
    next(error);
  }
};
// get singledata
exports.GetClientData = async (req, res, next) => {
  try {
    const clientData = await Client.findById(req.params.id);
    if (!clientData) {
      throw new AppError("client Id does not find", 400);
    }
    res.status(200).json({
      status: "success",
      data: clientData,
    });
  } catch (error) {
    next(error);
  }
};

// update clientData
exports.updateClientDate = async (req, res, next) => {
  try {
    const updateClient = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        isActive: true,
        runValidators: true,
      }
    );
    if (!updateClient) {
      throw new AppError("client does not find this Id", 401);
    }
    res.status(201).json({
      status: "success",
      data: updateClient,
    });
  } catch (error) {
    next(error);
  }
};
// deleteClient
exports.deleteClientData = async (req, res, next) => {
  try {
    const deleteClient = await Client.findByIdAndDelete(req.params.id);
    if (!deleteClient) {
      throw new AppError("client id does not find", 401);
    }
    res.status(200).json({
      status: "success",
      data: deleteClient,
    });
  } catch (error) {
    next(error);
  }
};
