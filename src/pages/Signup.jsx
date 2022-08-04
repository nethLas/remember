import React from "react";
import axios from "axios";

function Signup() {
  const handleSubmit = async () => {
    // await axios.post(url, {});
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          required
        />
      </div>
      <div className="form-group">
        <label>Last name (optional)</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          required
        />
      </div>

      <div className="form-group">
        <label>city (optional)</label>
        <input type="text" className="form-control" placeholder="city" />
      </div>
      <div className="form-group" style={{ marginBottom: "12px" }}>
        <label>phone number (optional)</label>
        <input
          type="tel"
          className="form-control"
          placeholder="eg. +972-54-321-2321"
        />
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block ">
        Register
      </button>
      <p className="forgot-password text-right">Already registered</p>
    </form>
  );
}

export default Signup;
