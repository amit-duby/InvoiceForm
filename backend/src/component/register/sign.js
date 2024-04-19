import React from "react";
// import axios from "axios";
const baseUrl = "http://localhost:5000";
function Sign() {
  const handleGoogleLogin = async () => {
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
  return (
    <div>
      <input type="text" placeholder="enter your name" />
      <input type="email" placeholder=" enter your email" />
      <input type="password" placeholder="enter your password" />
      <button type="button"></button>
      <hr></hr>
      <div>
        <button onClick={handleGoogleLogin}>Google with register</button>
      </div>
    </div>
  );
}

export default Sign;
