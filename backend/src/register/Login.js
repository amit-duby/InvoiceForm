import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { MdSupportAgent } from "react-icons/md";
import { useAuth } from "../Admin/auth";

import debounce from "lodash.debounce";

function Login() {
  // const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showValidations, setShowValidations] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email: email,
        password: password,
      };
      const result = await axios.post("/api/v1/login", formData);
      console.log(result.data, "user");
      if (result && result.data) {
        setAuth({
          ...auth,
          user: result.data.user,
          token: result.data.token,
          islogdId: true,
        });
        localStorage.setItem("auth", JSON.stringify(result.data));
        navigate("/about");
      }
    } catch (error) {
      console.log(error);

      setMessage(error.response.data.message);
    }
  };
  const validateEmail = (email) => {
    if (email.length === 0) {
      setError("Email is required");
      return false;
    }
    if (email.length < 5) {
      setError("Email should be at least 5 characters long");
      return false;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("Invalid email ");
      return false;
    }
    setError("");
    return true;
  };
  const debouncedValidateEmail = useCallback(
    debounce((email) => {
      setIsValid(validateEmail(email));
    }, 300),
    []
  );

  const handleChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    debouncedValidateEmail(newEmail);
  };
  useEffect(() => {
    setShowValidations(password.length > 0);
  }, [password]);
  const validations = [
    { condition: password.length >= 8, message: "At least 8 characters" },
    {
      condition: /[A-Z]/.test(password),
      message: "At least 1 uppercase letter",
    },
    {
      condition: /[a-z]/.test(password),
      message: "At least 1 lowercase letter",
    },
    {
      condition: /[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/.test(password),
      message: "At least 1 number or special character",
    },
  ];
  const circleCheckStyle = (condition) => ({
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: `2px solid ${condition ? "green" : "red"}`,
    marginRight: "10px",
    position: "relative",
  });
  const checkmarkStyle = (condition) => ({
    color: condition ? "green" : "red",
    fontSize: "14px",
  });
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="35"
              viewBox="0 0 79.118 20.319"
              className="text-blue-600"
            >
              {/* SVG path data */}
            </svg>
          </Link>
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <MdSupportAgent className="w-6 h-6 mr-1" />
              <span className="hidden sm:inline">Support</span>
            </div>
            <Link
              to="/register"
              className="bg-violet-300 px-4 py-2 rounded-md text-sm font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login to your Refrens account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500">or</span>
              </div>
            </div>

            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={handleChange}
                />
                {email && (
                  <p style={{ color: isValid ? "green" : "red" }}>
                    {isValid ? "Valid email" : error}
                  </p>
                )}
              </div>
              <div className="mt-3">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showValidations && (
                  <>
                    {validations.map((validation, index) => (
                      <p
                        className="ml-3 mt-2"
                        key={index}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <span style={circleCheckStyle(validation.condition)}>
                          <span style={checkmarkStyle(validation.condition)}>
                            {validation.condition ? "✓" : "✗"}
                          </span>
                        </span>
                        {validation.message}
                      </p>
                    ))}
                  </>
                )}
              </div>
            </div>
            {message && <p className=" text-red-600 mt-2">{message}</p>}
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="/forget-password"
                  className="font-medium text-violet-600 hover:text-violet-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Login and Continue
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account?{" "}
              <NavLink
                to="/register"
                className="font-medium text-violet-600 hover:text-violet-500"
              >
                Sign up now
              </NavLink>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
