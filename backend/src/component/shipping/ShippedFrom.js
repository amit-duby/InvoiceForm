import React, { useState } from "react";
import { AiFillIeCircle } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import axios from "axios";
function ShippedFrom() {
  const [transport, setTransport] = useState("");
  const [challanNo, setChallanNo] = useState("");
  const [challan, setChallan] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [supply, setSupply] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [name, setName] = useState("");
  const [strAddress, setStrAddress] = useState("");
  const [clState, setClState] = useState("");
  const [clAddress, setclAddress] = useState("");
  const [clPostalZip, setClPostalZip] = useState("");
  const [clCity, setClCity] = useState("");

  const handleShipped = async (e) => {
    e.preventDefault();
    try {
      // transport ................
      const formData = {
        transport: transport,
        challanNo: challanNo,
        challan: challan,
        vehicle: vehicle,
        vehicleNo: vehicleNo,
        vehicleType: vehicleType,
        supply: supply,
      };
      // ....... shipped ..........
      const shippForm = {
        state: state,
        city: city,
        postal: postal,
        address: address,
        country: selectedCountry,
      };
      const clientForm = {
        state: clState,
        city: clCity,
        address: clAddress,
        country: selecteCountry,
        postal: clPostalZip,
      };
      const clientresult = await axios.post("/api/v1/gs/client", clientForm);
      console.log(clientresult);
      const shippeResult = await axios.post("/api/v1/gs/transport", formData);
      console.log(shippeResult);
      const result = await axios.post("/api/v1/createship", shippForm);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< COUNTRIES VALUES HERE >>>>>>>>>>>>>>>>>>>>

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Austrian Empire*",
    "Azerbaijan",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Bahamas, The",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Nauru",
    "Nepal",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Oldenburg*",
    "Oman",
    "Pakistan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Zambia",
    "ZimbabweZambia",
    "Zimbabwe",
    "Kazakhstan",
    "Kenya",
    "Württemberg*",
    "Yemen",
    "Japan",
    "Jordan",
    " Kazakhstan",
    "Kenya",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "France",
    "Gabon",
  ];
  // State to hold the selected country
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selecteCountry, setSelecteCountry] = useState("");
  // Function to handle country selection
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleCountry = (e) => {
    setSelecteCountry(e.target.value);
  };
  // <<<<<<<<<<<<<<<<<<<<< END Country value>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <div className="mt-20">
      <div className="row ship">
        <div className="col-sm-5   shipping bg-slate-50">
          <div style={{ fontSize: "20px" }}>
            <input
              className="heading"
              type="text"
              defaultValue="Shipped Form"
              style={{ width: "7em", margin: "15px" }}
            />
          </div>
          <form className="fillship p-3">
            <div className="form-check">
              <input
                className="form-check-input"
                style={{ width: "20px", height: "20px", color: "indigo" }}
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Same as your business address
              </label>
            </div>

            <div className="inpcont">
              <input
                type="text"
                className="inptS w-full"
                placeholder="Business/Freelancer Name"
                style={{
                  width: "100%",
                  maxWidth: "20em",
                  marginRight: "100px",
                  marginTop: "10px",
                }}
              />
              <div className="select">
                <select
                  className="inptS w-full md:w-auto"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  style={{
                    marginRight: "100px",
                    width: "100%",
                    maxWidth: "20em",
                    marginTop: "10px",
                    fontStyle: "normal",
                  }}
                >
                  <option>Select Country</option>
                  {countries.map((country, index) => (
                    <option
                      style={{ margin: "5px", width: "100%", maxWidth: "20em" }}
                      key={index}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  className="inptS w-full md:w-auto"
                  placeholder="Address(optional)"
                  style={{
                    width: "100%",
                    maxWidth: "20em",
                    marginRight: "100px",
                    marginTop: "10px",
                  }}
                />
              </div>

              <div className="flex flex-wrap md:flex-nowrap">
                <input
                  type="text"
                  className="inptS w-full md:w-auto"
                  placeholder="City(optional)"
                  style={{ width: "100%", maxWidth: "20em", marginTop: "10px" }}
                />
                <div>
                  <input
                    type="text"
                    placeholder="Postal Code/Zip"
                    className="inptS "
                    style={{
                      width: "100%",
                      maxWidth: "30em",
                      marginRight: "50px",
                      marginTop: "10px",
                    }}
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  className="inptS w-full md:w-auto"
                  placeholder="State(optional)"
                  style={{
                    width: "100%",
                    maxWidth: "20em",
                    marginRight: "100px",
                    marginTop: "10px",
                  }}
                />
              </div>
            </div>
          </form>
        </div>

        {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< here shiipped To form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="col-md-5 shipping bg-slate-50">
          <div
            style={{
              fontSize: "20px",
            }}
          >
            <input
              className="  heading "
              type="text"
              defaultValue="Shipped To"
              style={{
                width: "5em",
                margin: "15px",
              }}
            />
          </div>

          {/* <<<<<< drop down >>>>>>>>>>>>>>>>>>>>>>>> */}

          <div>
            <button
              type="button"
              className="dropdown-item"
              style={{
                background: "indigo",
                color: "wheat",
                width: "90%",
                marginLeft: "25px",
                textAlign: "center",
              }}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Add More Feild
            </button>

            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Shippting To
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <>
                      <div className="mb-3">
                        <label
                          htmlFor="formGroupExampleInput"
                          className="form-label"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          id="formGroupExampleInput"
                          placeholder="Name"
                        />
                      </div>

                      <div>
                        <div className="mb-3">
                          <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                          >
                            State
                          </label>
                          <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="State"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-3">
                          <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-3">
                          <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                          >
                            Street Address
                          </label>
                          <input
                            type="text"
                            value={strAddress}
                            onChange={(e) => setStrAddress(e.target.value)}
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Street Address"
                          />
                        </div>
                      </div>
                      <div className="modal-body">
                        <div className="mb-3">
                          <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                          >
                            Postat Code/Zip Code
                          </label>
                          <input
                            type="text"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Postal Code/Zip Code"
                          />
                        </div>
                      </div>
                      <div>
                        <p style={{ margin: "20px" }}>
                          <CgAddR color={"indigo"} style={{ margin: "5px" }} />
                          Add More Fields
                        </p>
                      </div>
                    </>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="indigo"
                      style={{
                        width: "100%",
                        height: "20%",
                        background: "indigo",
                        color: "wheat",
                      }}
                    >
                      Add Shipping Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<<<<<<<<<<<<<<<<<<< mnnj>>>>>>>>>>>>>>>>> */}

          <form
            className="p-3 px-3 py-3  fillship "
            // style={{ height: "70vh", width: "30vw" }}
          >
            <div className="form-check">
              <input
                className="form-check-input "
                style={{ width: "20px", height: "20px", color: "indigo" }}
                type="checkbox"
                // defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Same as client's address
              </label>
            </div>
            <div className="inpcont">
              <input
                type="text"
                className=" inptS "
                // defaultValue="email@example.com"
                placeholder="Client's business name"
                style={{
                  width: "95%",
                  marginRight: "100px",
                  marginTop: "10px",
                }}
              />
              <div className="select">
                <select
                  className=" inptS"
                  style={{
                    width: "95%",
                    marginRight: "100px",
                    marginTop: "10px",
                    fontStyle: "normal",
                  }}
                >
                  <option>Select Country</option>
                  {countries.map((country, index) => (
                    <option
                      style={{ margin: "5px" }}
                      key={index}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  className=" inptS "
                  // defaultValue="email@example.com"

                  placeholder="Address(optional)"
                  style={{
                    width: "95%",
                    marginRight: "100px",
                    marginTop: "10px",
                  }}
                />
              </div>

              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  className=" inptS"
                  // defaultValue="email@example.com"

                  placeholder="City(optional)"
                  style={{
                    width: "70%",
                    // marginRight: "100px",
                  }}
                />
                <div>
                  <input
                    type="text"
                    placeholder="Postal Code/Zip"
                    className="inptS"
                    style={{
                      width: "90%",
                      marginRight: "50px",
                    }}
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  className=" inptS "
                  // defaultValue="email@example.com"

                  placeholder="State(optional)"
                  style={{
                    width: "95%",
                    marginRight: "100px",
                    marginTop: "10px",
                  }}
                />
              </div>
              <div className="form-check mt-3">
                <input
                  className="form-check-input "
                  // style={{ width: "20px", height: "20px", color: "indigo" }}
                  type="checkbox"
                  // defaultValue
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Save to Client Details
                </label>
              </div>
              <div className="flex  mt-2 ">
                <p className="">
                  <CgAddR
                    color="#c084fc"
                    style={{
                      marginRight: "4px",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </p>
                Add More Fields
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* </div>  */}
      {/* //   </div> */}

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< TransPort Detail >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div
        className="bg-slate-50 lg:ml-10 sm:ml-5 transformdiv"
        style={{ width: "100%", maxWidth: "33em" }}
      >
        <div className="row">
          <div
            style={{
              fontSize: "20px",
            }}
          >
            <input
              className="  heading "
              type="text"
              defaultValue="Transport Details"
              style={{
                width: "8em",
                margin: "19px",
                // marginLeft: "20px",
              }}
            />
          </div>

          <div
            className="col-md-6 lg:ml-10 sm:ml-10 transform "
            style={{ width: "100%", maxWidth: "30vw" }}
          >
            <from className="p-2 " onSubmit={handleShipped}>
              <>
                <div className="mb-3">
                  <label className="form-label">Transporter Details</label>
                  <button
                    className="btn bg-slate-50"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseWidthExample"
                    aria-expanded="false"
                    aria-controls="collapseWidthExample"
                    style={{
                      width: "100%",
                      marginRight: "100px",
                      marginTop: "10px",
                    }}
                  >
                    Select Transporter
                  </button>

                  <div className="collapse" id="collapseWidthExample">
                    <div className="card card-body" style={{ width: "21em" }}>
                      <h5
                        className="card-title"
                        style={{ textAlign: "center" }}
                      >
                        No Transporter Added
                      </h5>
                      <hr />
                      <p style={{ color: "indigo", textAlign: "center" }}>
                        + Add New
                      </p>
                    </div>
                  </div>

                  <>
                    <div className="mb-3">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="form-label"
                        style={{ marginTop: "10px" }}
                      >
                        Distance (in km)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        style={{
                          width: "100%",
                          marginRight: "100px",
                          marginTop: "5px",
                          // marginRight: "4px",
                        }}
                        id="formGroupExampleInput"
                      />
                    </div>
                  </>
                </div>
              </>

              <div className="flex">
                <NavLink
                  to="https://ewaybillgst.gov.in/Others/P2PDistance.aspx"
                  style={{
                    color: "indigo",
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Calculate distance here
                </NavLink>
                <AiFillIeCircle
                  width={"5em"}
                  style={{ marginTop: "5px", marginLeft: "3px" }}
                />
              </div>
              <div>
                <div>
                  <div
                    className="flex mt-3"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <p style={{ marginRight: "10px" }}>
                      <CgAddR
                        color={"indigo"}
                        style={{
                          width: "1em",
                          height: "25px",
                          // marginLeft: "2px",
                        }}
                      />
                    </p>
                    Add Mode of Transport
                  </div>

                  <div className="collapse" id="collapseExample">
                    <div className="card ">
                      <select
                        className="form-select"
                        value={transport}
                        onChange={(e) => setTransport(e.target.value)}
                        //   aria-label="Default select example"
                      >
                        <option>Selected...</option>
                        <option value="Road">Road</option>
                        <option value="Rail">Rail</option>
                        <option value="Ship">Ship</option>
                        <option value="air">Air</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex" style={{ marginTop: "15px" }}>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Challan Number
                  </label>
                  <input
                    type="text"
                    value={challanNo}
                    onChange={(e) => setChallanNo(e.target.value)}
                    className="form-control"
                    style={{ width: "12em", marginLeft: "2px" }}
                    id="formGroupExampleInput"
                    placeholder="Transport Doc Number(optional)"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput"
                    className="form-label ml-9"
                  >
                    Challan Date
                  </label>
                  <input
                    type="Date"
                    className="form-control"
                    value={challan}
                    onChange={(e) => setChallan(e.target.value)}
                    style={{ width: "12em", marginLeft: "2em" }}
                    id="formGroupExampleInput"

                    // hidden
                  />
                </div>
              </div>
              <div className="lg:flex" style={{ margin: "3px" }}>
                <div className="">
                  <p>Vehicle Type</p>
                  <select
                    className="form-select"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    style={{ width: "12em", marginTop: "9px" }}
                  >
                    <option>Selected...</option>
                    <option value="Road">Regural</option>
                    <option value="Rail">Over Dimensional c..</option>
                  </select>
                </div>
                <>
                  <div className="">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                      style={{ marginLeft: "2em" }}
                    >
                      Vehicle Number
                    </label>
                    <input
                      type="Text"
                      value={vehicleNo}
                      onChange={(e) => setVehicleNo(e.target.value)}
                      className="form-control"
                      style={{ width: "12em", marginLeft: "2em" }}
                      id="formGroupExampleInput"
                      placeholder="Vehicle Number (optional)"
                    />
                  </div>
                </>
              </div>
              <div className="lg:flex" style={{ marginTop: "15px" }}>
                <div>
                  <p>Vehicle Type</p>
                  <select
                    className="form-select"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    style={{ width: "12em", marginTop: "9px" }}
                  >
                    <option>Selected...</option>
                    <option value="Regural">Regural</option>
                    <option value="bill to-ship to">Bill To-Ship To</option>
                    <option value="Bill from dispach">
                      Bill From Dishpach..{" "}
                    </option>
                    <option value="Combination Of Both">
                      Combination Of Both{" "}
                    </option>
                  </select>
                </div>
                <div>
                  <p style={{ marginLeft: "2em" }}>Sub Supply Type</p>
                  <select
                    className="form-select"
                    style={{
                      width: "12em",
                      marginLeft: "2em",
                      marginTop: "9px",
                    }}
                    value={supply}
                    onChange={(e) => setSupply(e.target.value)}
                  >
                    <option>Selected...</option>
                    <option value="supply">Supply</option>
                    <option value="Import">Import</option>
                    <option value="Export">Export</option>
                    <option value="Job Work">Job Work</option>
                    <option value="From On Use">From On Use</option>
                    <option value="Sales">Sales Returns</option>
                    <option value="Other">Other</option>
                    <option value="Line Sales">Line Sales</option>
                  </select>
                </div>
              </div>
            </from>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippedFrom;
