const express = require("express");
// import upload from "./../multer";
const path = require("path");
const uploadDir = "./uploads";
const multer = require("multer");
const expressFormidable = require("express-formidable");
const {
  createInvoice,
  deleteInvoice,
  getAllInvoic,
  getSingleInvoice,
  updateInvoice,
  imageUpload,
} = require("../controller/invoicController.js");

// Biller routes and const

const {
  CreateBillder,
  GetAllBilleder,
  deleteBillers,
  getBillers,
  updateBilder,
} = require("../controller/BillController.js");

// client routes and const

const {
  GetAllClientData,
  GetClientData,
  createClient,
  deleteClientData,
  updateClientDate,
} = require("../controller/clientController.js");
const {
  GetAllShipped,
  GetShippedById,
  createShipped,
  deleteShippedById,
  updateShippedById,
} = require("../controller/shippedController");
const {
  GetAllUser,
  GetUserById,
  LoginUser,
  UserController,
  deleteUserById,
  logout,
  updateUserById,
} = require("../controller/userController");

const router = express.Router();
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< multer file uploader>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Ensure the destination directory exists
const fs = require("fs");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer configuration
const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadDir); // Use the uploadDir variable as the destination
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}${path.extname(file.originalname)}`); // Use path.extname to get the file extension
  },
});

// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only images is allow"));
  }
};
const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<???????????????????>>>>>>>>>>>>>>>>>>>
router.post("/create", upload.single("photo"), createInvoice);
router.get("/findAll", getAllInvoic);
router.get("/find/:id", getSingleInvoice);
router.put("/update/:id", updateInvoice);
router.delete("/delete/:id", deleteInvoice);
router.post(
  "/imageupload",
  expressFormidable({ maxFieldsSize: 5 * 1024 * 1024 }),
  imageUpload
);

// Bill Routere

router.post("/created", CreateBillder);
router.get("/find", GetAllBilleder);
router.get("/find/:id", getBillers);
router.put("/update/:id", updateBilder);
router.delete("/delete/:id", deleteBillers);

// Client Rutes

router.post("/createClient", createClient);
router.get("/find/:id", GetClientData);
router.get("/find", GetAllClientData);
router.put("/update/:id", updateClientDate);
router.delete("/delete/:id", deleteClientData);

// shipped order detail

router.post("/createship", createShipped);
router.get("/find/:id", GetAllShipped);
router.get("/find", GetShippedById);
router.put("/update/:id", updateShippedById);
router.delete("/delete/:id", deleteShippedById);

// user data
router.post("/sign", UserController);
router.get("/finduser", GetAllUser);
router.get("/finduser/:id", GetUserById);
router.put("/updateuser/:id", updateUserById);
router.delete("/deleteuser/:id", deleteUserById);
router.post("/login", LoginUser);
router.get("/logout", logout);

module.exports = router;
