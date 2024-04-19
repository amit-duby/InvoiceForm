import axios from "axios";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:5000";
function Ragister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const nagigate = useNavigate();

  // <<<<<< register widh google
  const handleGoogleRegister = async () => {
    try {
      // const response = await axios.get("http://localhost:5000/auth/google");
      // console.log("Authentication successful:", response.data);
      window.open(`${baseUrl}/auth/google/callback`, "_self");
      // Handle successful authentication (e.g., store token)
    } catch (error) {
      console.error("Authentication failed:", error);
      // Handle authentication failure
    }
  };
  // register with email

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        country: selectedCountry, // Include selectedCountry in the form data
      };

      const result = await axios.post("/api/v1/sign", formData);
      console.log(result.data);
      nagigate("/login");
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

  // Function to handle country selection
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  return (
    <div className="grid grid-cols-1 grid-cols-2 ">
      <div
        className="bg-violet-700"
        style={{
          width: "40vw",
          height: "100vh",
        }}
      >
        <div className="mt-20 ml-16 text-5xl" style={{ color: "white" }}>
          {" "}
          <h3>Tools you need to run your business.</h3>
        </div>
        <div className="mt-4 ml-16 text-2xl" style={{ color: "white" }}>
          <h3>Accounting. Inventory. Leads and more.</h3>
        </div>

        <div className="">
          <div
            className="ratio ratio-21x9  mt-16 ml-20  "
            style={{ height: "50vh", width: "30vw" }}
          >
            <iframe
              src="https://www.youtube.com/watch?v=2HoaQceZlUs"
              title="YouTube video"
              style={{ borderRadius: "30px " }}
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="mt-3 ml-14" style={{ color: "white" }}>
          <p>
            Join thousands of freelancers and businesses to grow your business
          </p>
        </div>
      </div>
      <div>
        <div className=" mt-4" style={{ marginLeft: "31em" }}>
          <div className="flex ms-auto mr-20">
            <div className="flex">
              <p>
                <MdSupportAgent
                  style={{
                    width: "1em",
                    height: "2em",
                    marginTop: "-3px",
                    marginRight: "3px",
                  }}
                />
              </p>
              Support
            </div>
            <div
              className=" ml-9 "
              style={{
                width: "6em",
                height: "45px",
                border: "2px solid blue",
                borderRadius: "5px",
                marginTop: "-5px",
              }}
            >
              <button type="button" className=" ml-4 mt-2">
                <Link to="/login" style={{ color: "blue" }}>
                  Login
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-3 ml-40 text-2xl ">
          <h3>Sign Up on Refrens</h3>
        </div>
        <div
          className="  bg-slate-50  mt-8"
          style={{
            width: "20vw",
            height: "6vh",
            border: "2px solid rgb(184, 179, 179)",
            marginLeft: "7em",
            borderRadius: "3px",
          }}
        >
          <p className="flex ml-14 mt-2">
            <FaGoogle
              style={{ width: "2em", height: "20px", marginTop: "2px" }}
            />
            <button type="button" className="" onClick={handleGoogleRegister}>
              Continue with Google
            </button>
          </p>
        </div>
        <div
          className="mt-3"
          style={{ marginLeft: "7em", color: "rgb(184, 179, 179)" }}
        >
          <p>________________________OR___________________</p>
        </div>
        <div>
          {/* <<<<<<<<<<< selector fields >>>>>>>>>>>>>> */}
          <div className="flex mt-2 ml-5 ">
            <p style={{ marginTop: "1em" }}>Country *</p>
            <select
              className=" "
              value={selectedCountry}
              onChange={handleCountryChange}
              style={{
                width: "40%",
                height: "42px",
                margin: "20px",
                marginLeft: "2em",
                border: "1px solid rgb(184, 179, 179)",
                borderRadius: "3px",
              }}
            >
              <option value="">India</option>
              {countries.map((countrys, index) => (
                <option
                  style={{ margin: "5px", height: "30vh" }}
                  key={index}
                  value={countrys}
                >
                  {countrys}
                </option>
              ))}
            </select>
          </div>

          {/* <<<<<<<<<<<<<<<<<<<<<<<<<<input fiel >>>>>>>>>>>>>>>>>>> */}
          <div className="flex">
            <label className="col-form-label" style={{ marginTop: "15px" }}>
              Your Name *
            </label>

            <div
              className="mt-2 "
              style={{
                width: "19vw",
                marginLeft: "2em",
                border: "1px solid rgb(184, 179, 179)",
                height: "2em",
                borderRadius: "3px",
              }}
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          {/* <<<<<<<<<<<<<<<<<<<<<<<<<< email  fiel >>>>>>>>>>>>>>>>>>> */}
          <div className="flex">
            <label className="col-form-label" style={{ marginTop: "25px" }}>
              Your Email *
            </label>

            <div
              className="mt-4 "
              style={{
                width: "19vw",
                marginLeft: "38px",
                border: "1px solid rgb(184, 179, 179)",
                height: "2em",
                borderRadius: "3px",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          {/* <<<<<<<<<<<<<<<<<<<<<<<<<< phone Number  fiel >>>>>>>>>>>>>>>>>>> */}
          <div className="flex">
            <label
              className="col-form-label ml-3"
              style={{ marginTop: "30px" }}
            >
              Phone *
            </label>

            <div
              className="mt-4 "
              style={{
                width: "19vw",
                marginLeft: "58px",
                height: "38px",
                border: "1px solid rgb(184, 179, 179)",
                borderRadius: "3px",
              }}
            >
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                placeholder="+91"
              />
            </div>
          </div>
          {/* <<<<<<<<<<<<<<<<<<<<<<<<<< password  fiel >>>>>>>>>>>>>>>>>>> */}
          <div className="flex">
            <label className="col-form-label" style={{ marginTop: "30px" }}>
              Set Password *
            </label>

            <div
              className="mt-4 "
              style={{
                width: "19vw",
                marginLeft: "25px",
                border: "1px solid rgb(184, 179, 179)",
                borderRadius: "3px",
                height: "2em",
              }}
            >
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<addd terms and conditions >>>>>>>>>>>>>>>>>>>>>> */}
          <div className="flex ml-8 mt-3">
            <p>I agree to the Refrens</p>
            <NavLink
              to="https://www.refrens.com/terms"
              className="ml-2"
              style={{
                borderBottom: "2px solid rgb(172, 170, 165) ",
                color: "rgb(184, 179, 179)",
              }}
            >
              Terms of Service
            </NavLink>{" "}
            <p className="ml-2">and</p>
            <NavLink
              to="https://www.refrens.com/privacy-policy"
              className="ml-2"
              style={{ borderBottom: "2px solid rgb(184, 179, 179) " }}
            >
              Privacy Policy
            </NavLink>
          </div>
        </div>
        {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< register button >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div
          className="d-grid gap-2 mt-6"
          style={{ width: "27em", marginLeft: "2em" }}
        >
          <button
            className="h-10 bg-violet-700 "
            onClick={handleRegister}
            style={{ borderRadius: "3px", color: "white" }}
            type="button"
          >
            Create Account
          </button>
        </div>
        {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<  add sonme check point >>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="flex ml-40 mt-2">
          <p>Already a user?</p>
          <NavLink
            to="/login"
            style={{
              color: "violet",
              borderBottom: "2px solid rgb(172, 170, 165)  ",
              marginLeft: "5px",
            }}
          >
            Login here
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Ragister;
