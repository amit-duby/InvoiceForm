import React, { useState } from "react";
import { CgAddR } from "react-icons/cg";
import { CiDollar } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
function DiscountOpt() {
  const [showFields, setShowFields] = useState(false);
  const [DisFields, setDisFields] = useState(false);
  const [disAllFields, setDisAllFields] = useState(false);
  const [extraFields, setExtraFields] = useState(false);
  const [showTotal, setShowTotal] = useState(false);
  const handleTotalWord = () => {
    setShowTotal(true);
  };
  const handleExtraFields = () => {
    setExtraFields(true);
  };

  const handleAddFields = () => {
    setShowFields(true);
  };
  const handleDis = () => {
    setDisFields(true);
  };
  const handleAllDisc = () => {
    setDisAllFields(true);
  };
  return (
    <div style={{ marginLeft: "38em", marginTop: "5em" }}>
      {!showFields && (
        <div>
          <p onClick={handleAddFields} style={{ cursor: "pointer" }}>
            Add Discounts/Additional Charges
          </p>
        </div>
      )}

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<start dis>>>>>>>>>>>>>>>>> */}
      {showFields && (
        <>
          {!DisFields && (
            <div
              className="flex mt-2"
              style={{ cursor: "pointer" }}
              onClick={handleDis}
            >
              <p style={{ marginTop: "-4px" }}>
                <CgAddR
                  style={{
                    width: "1em",
                    height: "2em",
                    marginRight: "1em",
                    color: "indigo",
                  }}
                />
              </p>
              Give Item wise Discount
            </div>
          )}

          {/* <<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>> */}
          {DisFields && (
            <div className="flex">
              <div className="row g-3 align-items-center">
                <div className="col-auto mt-6">
                  <label className="col-form-label">Discount</label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    style={{ width: "7em", marginLeft: "5em" }}
                    className="inptS"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
              </div>

              {/* <<<<<<<<<<<<<<<<<<<<<< selection>>>>>>>>>>>>> */}
              <div>
                <select className=" inptS" style={{ width: "3em" }}>
                  <option selected>%</option>
                  <option value={1}>
                    <p>
                      <MdOutlineCurrencyRupee />
                    </p>
                  </option>
                  <option value={1}>%</option>
                </select>
              </div>
            </div>
          )}
          {/* <<<<<<<<<<<<<<<<<<<<<<<<end discount >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          {!disAllFields && (
            <div className="flex cursor-pointer" onClick={handleAllDisc}>
              <p style={{ marginTop: "-1px" }}>
                <CgAddR
                  style={{
                    width: "1em",
                    height: "2em",
                    marginRight: "1em",
                    color: "indigo",
                  }}
                />
              </p>
              Give Discount on Total
            </div>
          )}
          {/* <<<<<<<<<<<<<<<<start total>>>>>>>>>>>>> */}
          {disAllFields && (
            <div className="flex">
              <input type="text" className="inpt" defaultValue={"Reductions"} />
              <div className="col-auto">
                <input
                  type="text"
                  style={{ width: "7em", marginLeft: "5em" }}
                  className="inptS"
                  aria-describedby="passwordHelpInline"
                  defaultValue={"0"}
                />
              </div>

              <div>
                <select className=" inptS" style={{ width: "3em" }}>
                  <option selected>%</option>
                  <option value={1}>
                    {" "}
                    <MdOutlineCurrencyRupee />
                  </option>
                  <option value={1}>%</option>
                </select>
              </div>
            </div>
          )}

          {/* <<<<<<<<<<<<<<<<<< add additional charges>>>>>>>>>>>>>>>>>>>>>>> */}
          {!extraFields && (
            <div className="flex cursor-pointer" onClick={handleExtraFields}>
              <p style={{ marginTop: "-2px" }}>
                <CgAddR
                  style={{
                    width: "1em",
                    height: "2em",
                    marginRight: "1em",
                    color: "indigo",
                  }}
                />
              </p>
              Add Additional Charges
            </div>
          )}
          {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<add >>>>>>>>>>>>>>>>>>>>>> */}
          {extraFields && (
            <div className="flex">
              <input
                type="text"
                className="inpt"
                defaultValue={"Extra Charges"}
              />
              <div className="col-auto">
                <input
                  type="text"
                  style={{ width: "7em", marginLeft: "5em" }}
                  className="inptS"
                  aria-describedby="passwordHelpInline"
                  defaultValue={"0"}
                />
              </div>

              <div>
                <select className=" inptS" style={{ width: "3em" }}>
                  <option selected>%</option>
                  <option value={1}>
                    <MdOutlineCurrencyRupee />
                  </option>
                  <option value={1}>%</option>
                </select>
              </div>
            </div>
          )}
        </>
      )}
      {/* <<<<<<<<<<<<<<<<<<<< add summarise >>>>>>>>>>>>>>>>>>>>> */}
      <div className="form-check mt-4">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue
          // id="flexCheckDefault"
        />
        <label className="form-check-label" style={{ cursor: "pointer" }}>
          Summarise Total Quantity
        </label>
      </div>
      {/* <<<<<<<<<<<<<<<< add total Inr>>>>>>>>>>>>>>>>>>> */}
      <hr style={{ marginTop: "1em", marginBottom: "2em" }} />
      <div style={{ marginTop: "-1em" }}>
        <input
          type="text"
          className="inpt"
          style={{ width: "3em" }}
          defaultValue={"Total"}
        />
        (INR)
      </div>

      <hr style={{ marginTop: "1em" }} />

      {/* <<<<<<<<<<<<<<<<<<<<<show total words>>>>>>>>>>>>>>>>>> */}
      {!showTotal && (
        <div className="flex mt-4 cursor-pointer" onClick={handleTotalWord}>
          <p className="ml-2">
            <CiDollar
              style={{
                width: "2em",
                height: "25px",
                marginRight: "1em",
                color: "indigo",
              }}
            />
          </p>
          Show Total In Words
        </div>
      )}
      {/* <<<<<<<<<<<<<<<<<<<<< total word >>>>>>>>>>>>>>>>> */}
      {showTotal && (
        <div>
          <div style={{ marginTop: "-1em" }}>
            <input
              type="text"
              className="inpt"
              style={{ width: "8em", marginTop: "1em" }}
              defaultValue={"Total (in words)"}
            />
          </div>
          <div style={{ marginTop: "-1em" }}>
            <input
              type="text"
              className="inpt"
              style={{ width: "8em", marginTop: "1em" }}
              defaultValue={"Total (in words)"}
            />
          </div>
          <hr style={{ marginTop: "1em" }} />
        </div>
      )}
      <div className="flex mt-4 cursor-pointer">
        <p style={{ marginLeft: "1em" }}>
          <CgAddR
            style={{
              width: "1em",
              height: "25px",
              marginRight: "1em",
              color: "indigo",
            }}
          />
        </p>
        Add More Fields
      </div>
    </div>
  );
}

export default DiscountOpt;
