// ImageUploadForm.js
import React, { useState } from "react";
import "./form.css";
import { PiImageSquareThin } from "react-icons/pi";
import axios from "axios";
import { CgAddR } from "react-icons/cg";
import Biller from "./Biller";
import ShippedFrom from "./shipping/ShippedFrom";
import AddSomemorefield from "./AddExtraDetail/AddSomemorefield";
import DiscountOpt from "../pages/DiscountOpt";
import AddMoreFields from "../pages/AddMoreFields";
import InvoiceRecur from "../pages/InvoiceRecur";
const InvoiceForm = ({ handleSubmit }) => {
  const [image, setImage] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [name, setName] = useState("");
  const [Ships, setShips] = useState(false);
  const [fiels, setFiels] = useState(false);
  const [due, setDue] = useState(false);
  const handleDuedate = () => {
    setDue(true);
  };

  const handleFiels = () => {
    setFiels(true);
  };
  const handleClick = () => {
    // e.preventDefault();
    setShips(true);
    // setRadio(...radio.false);
  };

  const handleInvoice = async (e) => {
    try {
      const formData = new FormData();
      formData.append("invoiceNo", invoiceNo);
      formData.append("invoiceDate", invoiceDate);
      formData.append("dueDate", dueDate);
      formData.append("name", name);
      formData.append("photo", image);
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      const response = await axios.post("/api/v1/create", formData, config);
      console.log(response);
      alert("Invoice data uploaded successfully!");
    } catch (error) {
      console.log("Error uploading invoice data:", error);
      alert("Error uploading invoice data. Please try again later.");
    }
  };
  //
  return (
    <div
      className="inviFor mt-11 px-4  "
      style={{
        width: "65em",
        height: "540vh",
        marginLeft: "14em",
        backgroundColor: "white",
      }}
    >
      <form className="">
        <div className="row">
          <div style={{ marginLeft: "30em" }}>
            <input
              className=" form-floating heading mt-5 font-bold text-2xl md:text-4xl"
              type="text"
              defaultValue="Invoice"
            />
          </div>
          <div className="cli  ">
            <div className="col-md-6 first">
              <div className="flex  gap-40">
                <input
                  type="text"
                  placeholder="InvoiceNo"
                  defaultValue="Invoice No"
                  className=" inpt"
                />
                <input
                  type="text"
                  value={invoiceNo}
                  onChange={(e) => setInvoiceNo(e.target.value)}
                  placeholder="value"
                  className="inptS"
                />
              </div>
              <div>
                <input
                  type="text"
                  defaultValue="invoice Date"
                  className="inpt"
                  style={{ width: "7em" }}
                />
                <input
                  style={{ marginLeft: "9em" }}
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  placeholder="Enter date "
                  className="inptS"
                />
              </div>
              {due && (
                <div className=" flex ">
                  <input
                    type="text"
                    defaultValue="due Date"
                    className=" inpt"
                    style={{ width: "5em" }}
                  />
                  <input
                    style={{ marginLeft: "11em" }}
                    type="date"
                    value={invoiceNo}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="inptS"
                  />
                </div>
              )}
              {!due && (
                <div
                  className="flex items-center"
                  style={{ fontFamily: "inherit", fontWeight: "200" }}
                  onClick={handleDuedate}
                >
                  <p>
                    <CgAddR
                      style={{ margin: "5px", width: "1em", height: "3em" }}
                    />
                  </p>{" "}
                  Add Valid Till Date
                </div>
              )}
              {fiels && (
                <div className="flex gap-40">
                  <input
                    type="text"
                    placeholder=" Field Name"
                    className=" inpt"
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="value"
                    className="inptS"
                  />
                </div>
              )}
              {!fiels && (
                <div
                  className="flex items-center"
                  style={{
                    fontFamily: "inherit",
                    marginTop: "-1em",
                    fontWeight: "200",
                  }}
                  onClick={handleFiels}
                >
                  <p>
                    <CgAddR
                      style={{ margin: "5px", width: "1em", height: "3em" }}
                    />
                  </p>{" "}
                  Add More Fields
                </div>
              )}
            </div>
            <div className="col-md-3 mt-5">
              <label
                htmlFor="image"
                className="bg-slate-50 imaag flex items-center"
              >
                <span>
                  <PiImageSquareThin
                    style={{
                      width: "2em",
                      height: "3em",
                      marginLeft: "2em",
                    }}
                  />
                </span>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  hidden
                />{" "}
                Add Business Logo
              </label>
            </div>
          </div>
        </div>
      </form>
      <Biller />

      {Ships ? (
        <ShippedFrom />
      ) : (
        <div>
          <div className="form-check">
            <input
              className="form-check-input "
              style={{
                width: "18px",
                height: "20px",
                backgroundcolor: "indigo",
              }}
              type="checkbox"
              // id="flexCheckDefault"
              onChange={handleClick}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Add Shipping Details
            </label>
          </div>
        </div>
      )}
      <AddSomemorefield />
      <DiscountOpt />
      <AddMoreFields />
      <InvoiceRecur />
      <div
        className="focus:outline-none text-white  p-3
           bg-red-600 hover:bg-rose-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  mt-5 dark:bg-red-600 dark:hover:bg-red-700
           dark:focus:ring-red-900 flex items-center"
        style={{ width: "15em", marginTop: "", marginLeft: "27em" }}
        onClick={handleInvoice}
      >
        save & Continue
      </div>
    </div>
  );
};

export default InvoiceForm;
