import React, { useState } from "react";
import "../style/forget-password.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();
  // const [error, setError] = useState();
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    if (!email) {
      setMessage("Email is require");
    } else {
      try {
        const result = await axios.post("/api/v1/password/forgot", formData);
        console.log("resetPassword Link successfully send", result);

        setMessage(result?.data?.message);

        setEmail("");

        // setMessage("");
        // alert("Invoice data successfully deleted from your database");
      } catch (error) {
        console.error("Error send resetPassword Link:", error);
        // alert("Failed to send resetPassword  Link to email from User");
        setMessage(error.response.data.message);
        // setError(result.error);
      }
    }
  };

  return (
    <div className="forget">
      <div className="mt-7 text-center">
        <p className="text-2xl">Forgot Password</p>
        <p className="mt-4">
          Enter your registered email id to get a link to reset your password.
        </p>
      </div>
      {message && <p className="text-red-600 text-center mb-4">{message}</p>}
      <div>
        <input
          type="email"
          id="exampleFormControlInput1"
          style={{ width: "22em" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your Email Id"
          className="form-control ml-10 mt-4"
        />
      </div>
      <button
        type="button"
        className="inline-block bg-red-600 ml-36 hover:bg-rose-500 text-white py-2 px-8 rounded-lg font-medium transition duration-300 ease-in-out mt-10 "
        onClick={handleResetPassword}
      >
        Get Reset Link
      </button>
      <div className="flex mt-4 ml-32">
        <p className="mr-4">Have password ?</p>
        <Link to="/login" style={{ color: "red" }} className="">
          {" "}
          Login Here
        </Link>
      </div>
      <div className="flex mt-1 ml-32">
        <p className="mr-4">New user? </p>
        <Link to="/login" style={{ color: "red" }} className="">
          {" "}
          Create New Account
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
