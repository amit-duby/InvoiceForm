import React from "react";
import { CiCalendarDate } from "react-icons/ci";
function InvoiceRecur() {
  return (
    <>
      <div
        className="mt-4 ml-2 bg-slate-50 "
        style={{ width: "35em", height: "20em" }}
      >
        <div className="form-check ">
          <label
            className="form-check-label mt-4 ml-2  cursor-pointer"
            htmlFor="flexCheckDefault"
          >
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              style={{ marginLeft: "1px", marginRight: "10px" }}
              id="flexCheckDefault"
            />
            This is a recurring invoice.
          </label>
        </div>
        <p style={{ marginLeft: "2em" }}>
          A draft invoice will be created with same details every next period.
        </p>

        {/* <<<<<<<<<<<<<<<<< add input >>>>>>>>>>>>>>>>>>>>>> */}

        <div className="row g-3 align-items-center mt-4 ml-6">
          <div className="col-auto">
            <label className="col-form-label">Invoice repeats</label>
          </div>
          <div className="col-auto ">
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ marginLeft: "7em", width: "" }}
            >
              <option selected>Every month</option>
              <option value={1}>Every Week</option>
              <option value={2}>Every 3 months</option>
              <option value={3}>Every 6 Months</option>
              <option value={3}>Every Year</option>
              <option value={3}>Every 2 Years</option>
              <option value={3}>Every 3 Years</option>
              <option value={3}>Every 4 Years</option>
              <option value={3}>Custom</option>
            </select>
          </div>
        </div>
        {/* <<<<<<<<<<<<<<<<<<<<<<<<< upcommig date>>>>>>>>>>>>>>>>>> */}
        <div className="row g-3 align-items-center mt-4 ml-6">
          <div className="col-auto">
            <label className="col-form-label">Upcoming Date</label>
          </div>
          <div className="col-auto  ">
            <div className="input-group" style={{ marginLeft: "100px" }}>
              <input
                type="date"
                className="form-control "
                style={{ width: "8em" }}
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div
                className="bg-slate-200"
                style={{ width: "3em", borderRadius: "6px" }}
              >
                <input
                  type="date"
                  //   id="basic-addon2"
                  hidden
                />
                <p>
                  <CiCalendarDate
                    style={{ width: "1em", height: "2em", marginLeft: "1em" }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*<<<<<<<<<<<<<<<<<<<<< checkdefa>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="form-check mt-2 ml-8" style={{ cursor: "pointer" }}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDisabled"
            id="flexRadioCheckedDisabled"
            defaultChecked
            style={{ marginTop: "1em", cursor: "pointer" }}
            //   disabled
          />
          <div>
            {" "}
            <label
              className="form-check-label cursor-pointer"
              htmlFor="flexRadioCheckedDisabled"
            >
              Create as Draft
            </label>
            <p style={{}}>
              Create a draft of the new invoice. I will approve and send it to
              the client
            </p>
          </div>
        </div>
      </div>
      <div
        className="mt-4 ml-2 bg-slate-50 "
        style={{ width: "35em", height: "15em" }}
      >
        <div style={{ marginLeft: "2em" }}>
          <p className="py-4">Advance Options</p>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Hide Place Of Supply/Country Of Supply
            </label>
          </div>
        </div>
        {/* <<<<<<<<<<<<<<<<<<<<second>>>>>>>>>>>>>>>>>>>> */}
        <div className="form-check ml-8 mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Add Original Images in Line Items
          </label>
        </div>
        {/* <<<<<<<<<<<<<<<< third >>>>>>>>>>>>>>>>>>>>> */}
        <div className="form-check ml-8 mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Show thumbnail images in a separate column
          </label>
        </div>
        {/* <<<<<<<<<<<<<<<<<<<< four >>>>>>>>>>>>>>>> */}
        <div className="form-check ml-8 mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Show description in full width
          </label>
        </div>
      </div>
    </>
  );
}

export default InvoiceRecur;
