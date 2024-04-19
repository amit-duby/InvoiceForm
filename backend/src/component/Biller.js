import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import axios from "axios";

function Biller() {
  // <<<<<<<<<<<<<<<<<<<<<<<<< HERE START STATE PUTING   vaLUE????????????????????????????
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isGst, setIsGst] = useState(false);
  const [isPan, setIsPan] = useState(false);
  // <<<<<<<<<<<<<<<<<<client fields >>>>>>>>>>>>>>>>>>>>>>>>>
  const [cliEmail, setCliEmail] = useState(false);
  const [cliPhone, setCliPhone] = useState(false);
  const [cliGst, setCliGst] = useState(false);
  const [cliPan, setCliPan] = useState(false);
  // <<<<<<<<<<<<<<<<<<<<<< client handler >>>>>>>>>>>>>>>>>>>>>
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< isEmai hander ???????????????>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleClIEmail = () => {
    setCliEmail(true);
  };
  // <<<<<<<<<<<<<<<<<<<<<<<< handleisPhone >>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleCLIPhone = () => {
    setCliPhone(true);
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<handleisgst >>>>>>>>>>>>>>>>>>>>>>>>
  const handleCLIGst = () => {
    setCliGst(true);
  };

  // <<<<<<<<<<<<<<<<<<<<<<<< end client >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< handleisPan>>>>>>>>>>>>>>>>>>>>>>
  const handleCLIPan = () => {
    setCliPan(true);
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< isEmai hander ???????????????>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleIsEmail = () => {
    setIsEmail(true);
  };
  // <<<<<<<<<<<<<<<<<<<<<<<< handleisPhone >>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleIsPhone = () => {
    setIsPhone(true);
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<handleisgst >>>>>>>>>>>>>>>>>>>>>>>>
  const handleIsGst = () => {
    setIsGst(true);
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< handleisPan>>>>>>>>>>>>>>>>>>>>>>
  const handleisPan = () => {
    setIsPan(true);
  };
  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  const [selectedState, setSelectedState] = useState("");

  // Function to handle state selection
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };
  //<<<<<<<<<<<<<<<<<<<<<<<??????????? HERRE END STATE VALUE ??????????>>>>>>>>>>>>>>>>>>>>

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
  const [country, setCountry] = useState("");
  const [selecteCountry, setSelecteCountry] = useState("");
  // Function to handle country selection
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  //
  const handleCountry = (e) => {
    setSelecteCountry(e.target.value);
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HERE END COUNTRIES VALUE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<< START BILLER VALUE >>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gst, setGst] = useState("");
  const [panNo, setPanNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState("");

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< client detail >>>>>>>>>>>>>>>>>>>>>>
  const [clemail, setClEmail] = useState("");
  const [clPhone, setClPhone] = useState("");
  const [clgst, setClGst] = useState("");
  const [clpanNo, setClPanNo] = useState("");
  const [claddress, setClAddress] = useState("");
  const [clcity, setClCity] = useState("");
  const [clpostCode, setClPostCode] = useState("");
  const [clname, setClName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email: email,
        phone: phone,
        gst: gst,
        panNo: panNo,
        address: address,
        city: city,
        postCode: postCode,
        name: name,
        state: state,
        country: country,
      };

      // Make POST request to the backend to save the form data
      const response = await axios.post("/api/v1/created", formData);
      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.log("Error:", error);
    }
  };
  // <<<<<<<<<<<<<<<<???????????????????? client submit ???????>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleClientSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email: cliEmail,
        phone: cliPhone,
        gst: cliGst,
        panNo: cliPan,
        address: claddress,
        city: clcity,
        postCode: clpostCode,
        name: clname,
        state: selectedState,
        country: selecteCountry,
      };

      // Make POST request to the backend to save the form data
      const response = await axios.post("/api/v1/createClient", formData);
      console.log(response.data); // Log the response from the server

      // Clear the form fields after successful submission
      setClEmail("");
      setClPhone("");
      setClGst("");
      setClPanNo("");
      setClAddress("");
      setClCity("");
      setClPostCode("");
      setClName("");
      setSelectedState("");
      setSelecteCountry("");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="  bill">
      <div className="row">
        {" "}
        <div className=" flex   ">
          <input
            className=" form-floating heading  text-center w-8 "
            type="text"
            defaultValue="Billed By"
          />
          <p className="ml-2"> (your Detail)</p>
        </div>
        <div className="col-md-4 Bill bg-slate-50">
          <from onSubmit={handleSubmit} className="inpfil">
            <div className="select">
              <select
                className=" inptS"
                value={country}
                onChange={handleCountryChange}
                style={{ width: "90%", margin: "20px" }}
              >
                <option value="">India</option>
                {countries.map((country, index) => (
                  <option
                    style={{ margin: "20px" }}
                    key={index}
                    value={country}
                  >
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="inpcont">
              <input
                type="text"
                className=" inptS "
                placeholder="Your Business/Freelancer Nan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "90%",
                  marginLeft: "1em",
                  marginTop: "-20px",
                }}
              />
              {/*<<<<<<<<<<<<<<<<<<<<<<<<< email and phone >>>>>>>>>>>>>>>>>>>>>>>>>. */}
              <div style={{ display: "flex" }}>
                {isEmail && (
                  <input
                    type="text"
                    className=" inptS"
                    // defaultValue="email@example.com"
                    placeholder="Your email(optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "60%",
                      marginLeft: "1em",
                      marginTop: "20px",
                    }}
                  />
                )}
                <div>
                  {isPhone && (
                    <input
                      type="text"
                      // placeholder="Postal Code/Zip"
                      defaultValue={"+91"}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="inptS"
                      style={{
                        width: "90%",
                        marginTop: "20px",
                        marginRight: "50px",
                      }}
                    />
                  )}
                </div>
              </div>
              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<< gst and pan >>>>>>>>>>>>>>>>>>>>>>>>>> */}
              <div style={{ display: "flex" }}>
                {isGst && (
                  <input
                    type="text"
                    className=" inptS"
                    value={gst}
                    onChange={(e) => setGst(e.target.value)}
                    // defaultValue="email@example.com"
                    placeholder="Your GSTIN(optional)"
                    style={{
                      width: "60%",
                      marginLeft: "1em",
                      marginTop: "20px",
                    }}
                  />
                )}
                <div>
                  {isPan && (
                    <input
                      type="text"
                      placeholder="Your PAN (optional)"
                      value={panNo}
                      onChange={(e) => setPanNo(e.target.value)}
                      className="inptS"
                      style={{
                        width: "90%",
                        marginTop: "20px",
                        marginRight: "50px",
                      }}
                    />
                  )}
                </div>
              </div>
              {/* <<<<<<<<<<<<<<<<<<<<<< address >>>>>>>>>>>>>>>>>>>>>>> */}
              <input
                type="text"
                className=" inptS"
                // defaultValue="email@example.com"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address(optional)"
                style={{
                  width: "90%",
                  marginTop: "20px",
                  marginLeft: "1em",
                }}
              />
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  className=" inptS"
                  // defaultValue="email@example.com"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City(optional)"
                  style={{
                    width: "60%",
                    marginLeft: "1em",
                    marginTop: "20px",
                  }}
                />
                <div>
                  <input
                    type="text"
                    placeholder="Postal Code/Zip"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    className="inptS"
                    style={{
                      width: "90%",
                      marginTop: "20px",
                      marginRight: "50px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <input
                type="text"
                className=" inptS"
                // defaultValue="email@example.com"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State(optional)"
                style={{
                  width: "90%",
                  marginTop: "20px",
                  marginLeft: "1em",
                }}
              />
            </div>

            <div style={{ display: "flex  ", cursor: "pointer" }}>
              {!isEmail && (
                <div
                  onClick={handleIsEmail}
                  style={{ display: "flex  ", marginTop: "1em" }}
                >
                  <p style={{ marginLeft: "1em" }}>
                    <AiOutlineMail
                      style={{ margin: "10px", color: "indigo" }}
                    />
                  </p>
                  Add Email
                </div>
              )}

              {!isPhone && (
                <div
                  onClick={handleIsPhone}
                  style={{ display: "flex  ", marginTop: "1em" }}
                >
                  <p style={{ marginLeft: "10px" }}>
                    <AiOutlinePhone
                      style={{ margin: "10px", color: "indigo" }}
                    />
                  </p>{" "}
                  Add Phone Number
                </div>
              )}
            </div>

            <div style={{ display: "flex", cursor: "pointer" }}>
              {!isGst && (
                <div
                  onClick={handleIsGst}
                  style={{ display: "flex", marginTop: "1em" }}
                >
                  <p style={{ marginLeft: "1em" }}>
                    <CgAddR style={{ margin: "10px", color: "indigo" }} />
                  </p>
                  Add GST
                </div>
              )}
              {!isPan && (
                <div
                  onClick={handleisPan}
                  style={{ display: "flex", marginTop: "1em" }}
                >
                  <p style={{ marginLeft: "1em" }}>
                    <CgAddR style={{ margin: "10px", color: "indigo" }} />
                  </p>
                  Add PAN
                </div>
              )}
            </div>
            <div className="flex items-center mt-2">
              <p style={{ marginLeft: "1em" }}>
                <CgAddR style={{ margin: "10px", color: "indigo" }} />
              </p>
              Add Custom Fields
            </div>
          </from>
        </div>
        <>
          <div className="col-md-4 Bill bg-slate-50 ">
            <form className="inpfil" onSubmit={handleClientSubmit}>
              <div className="select">
                <select
                  className=" inptS"
                  value={selecteCountry}
                  onChange={handleCountry}
                  style={{ width: "90%", margin: "20px" }}
                >
                  <option value="India">India</option>
                  {countries.map((country, index) => (
                    <option
                      style={{ margin: "10px" }}
                      key={index}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inpcont">
                <input
                  type="text"
                  className=" inptS "
                  // defaultValue="email@example.com"
                  placeholder="Client's business name(Required)"
                  value={clname}
                  onChange={(e) => setClName(e.target.value)}
                  required
                  style={{
                    width: "90%",
                    marginLeft: "1em",

                    marginTop: "5px",
                  }}
                />
                {/* <<<<<<<<<<<<<<<<<<<< add email and phone  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div style={{ display: "flex" }}>
                  {cliEmail && (
                    <input
                      type="text"
                      className=" inptS"
                      // defaultValue="email@example.com"
                      value={clemail}
                      onChange={(e) => setClEmail(e.target.value)}
                      placeholder="Client email (optional)"
                      style={{
                        width: "50%",
                        marginTop: "20px",
                        marginLeft: "10px",
                      }}
                    />
                  )}
                  <div>
                    {cliPhone && (
                      <input
                        type="text"
                        // placeholder=""
                        defaultValue={"+ 91"}
                        value={clPhone}
                        onChange={(e) => setClPhone(e.target.value)}
                        className="inptS"
                        style={{
                          width: "85%",
                          marginTop: "20px",
                        }}
                      />
                    )}
                  </div>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< add gst and pan >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div style={{ display: "flex" }}>
                  {cliGst && (
                    <input
                      type="text"
                      className=" inptS"
                      // defaultValue="email@example.com"
                      value={clgst}
                      onChange={(e) => setClGst(e.target.value)}
                      placeholder="Client's GSTIN (optional)"
                      style={{
                        width: "50%",
                        marginTop: "20px",
                        marginLeft: "10px",
                      }}
                    />
                  )}
                  <div>
                    {cliPan && (
                      <input
                        type="text"
                        placeholder="Client's PAN (optional)"
                        value={clpanNo}
                        onChange={(e) => setClPanNo(e.target.value)}
                        className="inptS"
                        style={{
                          width: "85%",
                          marginTop: "20px",
                        }}
                      />
                    )}
                  </div>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< add address >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <input
                  type="text"
                  className=" inptS"
                  // defaultValue="email@example.com"
                  placeholder="Address(optional)"
                  value={claddress}
                  onChange={(e) => setClAddress(e.target.value)}
                  style={{
                    width: "90%",
                    marginLeft: "1em",
                    marginTop: "10px",
                  }}
                />
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    className=" inptS"
                    // defaultValue="email@example.com"
                    value={clcity}
                    onChange={(e) => setClCity(e.target.value)}
                    placeholder="City(optional)"
                    style={{
                      width: "50%",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  />
                  <div>
                    <input
                      type="text"
                      placeholder="Postal Code/Zip"
                      value={clpostCode}
                      onChange={(e) => setClPostCode(e.target.value)}
                      className="inptS"
                      style={{
                        width: "85%",
                        marginTop: "20px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="select">
                <select
                  className=" inptS"
                  value={selectedState}
                  onChange={handleStateChange}
                  style={{ width: "90%", marginTop: "10px", marginLeft: "1em" }}
                >
                  <option value="">State (optional)</option>
                  {statesOfIndia.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: "flex  ", cursor: "pointer" }}>
                {!cliEmail && (
                  <div
                    style={{ display: "flex  ", marginTop: "1em" }}
                    onClick={handleClIEmail}
                  >
                    <p style={{ marginLeft: "1em" }}>
                      <AiOutlineMail
                        style={{ margin: "10px", color: "indigo" }}
                      />
                    </p>
                    Add Email
                  </div>
                )}
                {!cliPhone && (
                  <div
                    style={{ display: "flex  ", marginTop: "1em" }}
                    onClick={handleCLIPhone}
                  >
                    <p style={{ marginLeft: "10px" }}>
                      <AiOutlinePhone
                        style={{ margin: "10px", color: "indigo" }}
                      />
                    </p>{" "}
                    Add Phone Number
                  </div>
                )}
              </div>
              <div style={{ display: "flex", cursor: "pointer" }}>
                {!cliGst && (
                  <div
                    style={{ display: "flex  ", marginTop: "1em" }}
                    onClick={handleCLIGst}
                  >
                    <p style={{ marginLeft: "1em" }}>
                      <CgAddR style={{ margin: "10px", color: "indigo" }} />
                    </p>
                    Add GST
                  </div>
                )}
                {!cliPan && (
                  <div
                    style={{ display: "flex  ", marginTop: "1em" }}
                    onClick={handleCLIPan}
                  >
                    <p style={{ marginLeft: "1em" }}>
                      <CgAddR style={{ margin: "10px", color: "indigo" }} />
                    </p>
                    Add PAN
                  </div>
                )}
              </div>
              <div className="flex items-center mt-2">
                <p style={{ marginLeft: "1em" }}>
                  <CgAddR style={{ margin: "10px", color: "indigo" }} />
                </p>
                Add Custom Fields
              </div>
              {/* <div>
                <button type=" button " onClick={handleClientSubmit}>
                  submit form
                </button>
              </div> */}
            </form>
          </div>
        </>
      </div>
    </div>
  );
}

export default Biller;
