import axios from "axios";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

import "./register.css";
import { NavLink, useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:5000";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [agreeTerm, setAgreeTerm] = useState(false);
  const [message, setMessage] = useState("");
  const [checkError, setCheckError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const navigate = useNavigate();

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
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isPhoneNumberValid = validatePhoneNumber(phone);
    const isTermsandCondition = validateTerms(agreeTerm);
    if (
      isEmailValid &&
      isNameValid &&
      isPasswordValid &&
      isPhoneNumberValid &&
      isTermsandCondition
    ) {
      console.log("form is valid , submit tha data ");

      try {
        const formData = {
          name: name,
          email: email,
          password: password,
          phone: phone,
          country: selectedCountry, // Include selectedCountry in the form data
        };

        const result = await axios.post("https://invoiceform-2.onrender.com/api/v1/sign", formData);
        console.log(result.data);

        navigate("/login");
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.message);
      }
    } else {
      console.log("form has errors,please correct them");
    }
  };

  const validateName = (name) => {
    if (name.trim().length < 4) {
      setNameError("Name must be at least 3 characters long");
      return false;
    }
    setNameError("");
    return true;
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Invalid email");
      return false;
    }
    setEmailError("");
    return true;
  };
  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    if (!/\d/.test(password)) {
      setPasswordError("Password must contain at least one number");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must constain at least one lowercase letter");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase latter");
      return false;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError(
        "Password must contain at least one special character (!@#$%^&*)"
      );
      return false;
    }
    setPasswordError("");
    return true;
  };
  const validatePhoneNumber = (phone) => {
    const regex = /^\d{10}$/;
    if (!regex.test(phone)) {
      setPhoneError("phone number must be 10 digits");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validateTerms = () => {
    let isValid = true;
    if (!agreeTerm) {
      setCheckError("You must agree to tha terms and conditions");
      isValid = false;
    }

    return isValid;
  };
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    validatePhoneNumber(value);
  };
  const handleTermsChanges = (e) => {
    setAgreeTerm(e.target.checked);
    setCheckError("");
  };

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
    const count = e.target.value;

    setSelectedCountry(count);
    // setMessage("");
  };
  return (
    <div className="kmzRxy ">
      <div className=" gKHqfp  kXhaEw">
        <h3>Sign Up on Refrens</h3>
      </div>
      <div className="  jbTtDM">
        <p className="  flex">
          <FaGoogle
            style={{ width: "2em", height: "20px", marginTop: "2px" }}
          />
          <button
            type="button"
            className=" dNAxbK dwmdGu"
            onClick={handleGoogleRegister}
          >
            Continue with Google
          </button>
        </p>
      </div>
      <div
        className="mt-3"
        style={{ marginLeft: "2em", color: "rgb(184, 179, 179)" }}
      >
        <p>________________________OR___________________</p>
      </div>
      <div>
        {/* <<<<<<<<<<< selector fields >>>>>>>>>>>>>> */}
        <div className="flex mt-2 ml-5 ">
          <p style={{ marginTop: "1em" }}>Country *</p>
          <select
            className=" css-m8a952 mt-2"
            value={selectedCountry}
            onChange={handleCountryChange}
            required
            style={{
              // width: "40%",
              height: "40px",
              // margin: "20px",
              marginLeft: "6px",
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
        <div className="flex ml-6">
          <label className="col-form-label">Name *</label>

          <div
            className="mt-2 ml-3 css-jbjo08 diBlqh "
            style={{
              width: "18em",
            }}
          >
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter Name"
              required
              className="form-control "
            />
            {nameError && <p style={{ color: "red" }}>{nameError}</p>}
          </div>
        </div>
        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< email  fiel >>>>>>>>>>>>>>>>>>> */}
        <div className="flex ml-6 mt-2">
          <label className="col-form-label" style={{ marginTop: "25px" }}>
            Email *
          </label>

          <div
            className="mt-4  ml-4  diBlqh"
            style={{
              width: "18em",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter Email "
              required
              className="form-control"
            />

            {emailError ? (
              <p style={{ color: "red" }}>{emailError}</p>
            ) : (
              message && <p className="text-sm text-red-600 mt-1">{message}</p>
            )}
          </div>
        </div>
        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< phone Number  fiel >>>>>>>>>>>>>>>>>>> */}
        <div className="flex">
          <label className="col-form-label ml-3" style={{ marginTop: "30px" }}>
            Phone *
          </label>

          <div
            className="mt-4  ml-5  diBlqh"
            style={{
              width: "18em",
            }}
          >
            <input
              type="text"
              value={phone}
              onChange={handlePhoneNumberChange}
              required
              className="form-control"
              placeholder="+91"
            />
            {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}
          </div>
          {/* {message && <p className="text-sm text-red-600 ml-4">{message}</p>} */}
        </div>

        {/* <<<<<<<<<<<<<<<<<<<<<<<<<< password  fiel >>>>>>>>>>>>>>>>>>> */}
        <div className="flex">
          <label className="col-form-label" style={{ marginTop: "30px" }}>
            Password *
          </label>

          <div
            className="mt-4  ml-3  diBlqh"
            style={{
              width: "18em",
            }}
          >
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
              required
              className="form-control"
            />
            {passwordError && (
              <p className="text-sm" style={{ color: "red" }}>
                {passwordError}
              </p>
            )}
          </div>
        </div>

        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<addd terms and conditions >>>>>>>>>>>>>>>>>>>>>> */}
        <div className=" bTFJZx  ">
          <input
            className="form-check-input mt-4"
            type="checkbox"
            checked={agreeTerm}
            onChange={handleTermsChanges}
            defaultValue
            id="flexCheckDefault"
          />
          <label className="form-check-label mt-4" htmlFor="flexCheckDefault">
            <div className="flex ">
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
          </label>
          {checkError && <p style={{ color: "red" }}>{checkError}</p>}
        </div>
      </div>
      {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< register button >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div
        className="d-grid gap-2 mt-6"
        style={{ width: "27em", marginRight: "4em" }}
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
  );
}

export default Register;
