import React from "react";
import { NavLink } from "react-router-dom";

function Issues() {
  return (
    <div
      className="bg-violet-700 "
      style={{ height: "100vh", width: "100vw", position: "fixed" }}
    >
      <div
        className="bg-slate-50 mt-20"
        style={{
          width: "30vw",
          height: "70vh",
          marginLeft: "35em",
          borderRadius: "5px",
        }}
      >
        <div className="mt-50 text-3xl" style={{ marginLeft: "6em" }}>
          <h3>Refrens</h3>
        </div>

        <div className="text-2xl mt-5 " style={{ marginLeft: "6em" }}>
          <h2>Login with Email</h2>
        </div>
        <div className="mt-4 ml-14">
          <p>
            Enter your registered email id to get a magic link to <br />
            sign in to Refrens directly.
          </p>
        </div>
        <div>
          <div className="mb-3 mt-9 ml-14">
            <input
              type="text"
              className="form-control"
              style={{ width: "23em" }}
              id="formGroupExampleInput"
              placeholder="Your email id"
              required
            />
          </div>
        </div>
        <div className="ml-40 mt-20">
          <button type="button" style={{ width: "" }} class="btn btn-danger">
            Get Magic Link
          </button>
        </div>
        <div className="flex mt-5" style={{ marginLeft: "8em" }}>
          <p>New user ?</p>
          <NavLink to="/register" className={{ marginLeft: "6px" }}>
            Create New Account
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Issues;
