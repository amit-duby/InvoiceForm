const express = require("express");
const path = require("path");
const uploadDir = "./uploadFile";
const multer = require("multer");
const {
  gstController,
  getAllGst,
  getOneGst,
  updateGst,
  deletedGst,
} = require("../controller/GstController");
const {
  itemsController,
  getAllItems,
  getOneItems,
  deletedItems,
  updateItems,
} = require("../controller/ItemsController");
const {
  extraDetailController,
  getAllDtails,
  getOneDetails,
  updateDetails,
  deleteDetails,
} = require("../controller/ExtraDetailController");
const router = express.Router();

router.post("/create", gstController);
router.get("/get", getAllGst);
router.get("/get/:id", getOneGst);
router.put("/update/:id", updateGst);
router.delete("/delete/:id", deletedGst);

// <<<<<<<<<<<<<<<<<< items router >>>>>>>>>>>>>>>>>>

router.post("/createItems", itemsController);
router.get("/get", getAllItems);
router.get("/get/:id", getOneItems);
router.put("/update/:id", updateItems);
router.delete("/delete/:id", deletedItems);

// extradetails router >>>>>>>>>>>>>>>>>

const fs = require("fs");
const {
  ClientController,
  TransportController,
} = require("../controller/shippedController");
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

router.post("/createdetails", upload.single("photo"), extraDetailController);
router.get("/get", getAllDtails);
router.get("/get/:id", getOneDetails);
router.put("/update/:id", updateDetails);
router.delete("/delete/:id", deleteDetails);

// shippedclient
router.post("/client", ClientController);
router.post("/transport", TransportController);

module.exports = router;
