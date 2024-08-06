const express = require("express");
// import upload from "./../multer";
// const path = require("path");
// const uploadDir = "./uploads";
// const uploadFile = "./uploadFile";
// const multer = require("multer");
// const expressFormidable = require("express-formidable");
const {
  createInvoice,
  deleteInvoice,
  getAllInvoice,
  getSingleInvoice,
  updateInvoiceById,

  SearchInvoicecollection,
  createMultipleInputFields,
  getInvoicesByUserId,
  updateInvoiceByUserId,

  deleteInvoiceByUserId,
  getSingleInvoicesByUserId,
  findUserByInvoice,
} = require("../controller/invoicController.js");

const {
  GetAllUser,
  GetUserById,
  LoginUser,
  UserController,
  deleteUserById,
  logout,
  updateUserById,
  forgetPassword,
  resetPassword,
} = require("../controller/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../utill/auth.js");

const router = express.Router();

router.post("/create", createInvoice);
router.get(
  "/find",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllInvoice
);
router.get("/find/:id", getSingleInvoice);
router.get("/invoiceByuser/:userId", getInvoicesByUserId);
router.get("/invoiceByuserId/:userId", getSingleInvoicesByUserId);
router.put("/updateByUserId/:userId", updateInvoiceByUserId);
router.get("/find/:id", getSingleInvoice);
router.delete("/deleteInvoiceByUserId/:userId", deleteInvoiceByUserId);
router.get("/search/:key", SearchInvoicecollection);
router.put("/update/:id", updateInvoiceById);
router.delete("/delete/:id", deleteInvoice);
router.get("/UserByInvoiceId/:id", findUserByInvoice);
// router.post("/inputCreate", createMultipleInputFields);

// user data
router.post("/sign", UserController);
router.get("/finduser", GetAllUser);
router.get("/finduser/:id", GetUserById);
router.post("/password/forgot", forgetPassword);
router.put("/password/reset/:token", resetPassword);
router.put("/updateuser/:id", updateUserById);
router.delete("/deleteuser/:id", deleteUserById);
router.get("/user-auth", isAuthenticatedUser, (req, res) => {
  res.status(200).send({ ok: true });
});
router.get(
  "/admin-auth",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  (req, res) => {
    res.status(200).send({ ok: true });
  }
);
router.post("/login", LoginUser);
router.get("/logout", logout);

module.exports = router;
