import React, { useState } from "react";
import axios from "axios";
import { AuthService } from "../services/auth.services.js"


function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    // await axios.post(url, {});
    e.preventDefault();
    const data = { firstName, lastName,  email, password, city, phone};
    console.log(data);  
    await AuthService.signUp(
      data.email,
      data.password,
      data.phone,
      data.firstName,
      data.lastName,  
      data.city)
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
          value={firstName}
          onChange = {(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Last name (optional)</label>
        <input type="text" className="form-control" placeholder="Last name"
         value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          required
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          required
          value={password}onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>city (optional)</label>
        <input type="text" className="form-control" placeholder="city" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="form-group" style={{ marginBottom: "12px" }}>
        <label>phone number (optional)</label>
        <input
          type="tel"
          className="form-control"
          placeholder="eg. +972-54-321-2321"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}

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