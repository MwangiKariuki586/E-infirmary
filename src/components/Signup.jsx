import React from "react";
import "./Signup.css";
import lock from "../assets/lock.jpg";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="container">
      <h1 className="heading">Sign Up</h1>
      <form className="form">
        <img className="lock" src={lock} alt="" />
        <label htmlFor="Full_name">Full name</label>
        <input className="input_field" type="text" />
        <label htmlFor="Full_name">Email</label>
        <input className="input_field" type="email" />
        <label htmlFor="Full_name">Password</label>
        <input className="input_field" type="password" />
        <label htmlFor="Full_name">Confirm Password</label>
        <input className="input_field" type="password" />
        <button className="btn spaced">Submit</button>
        <Link to={"/login"}>Already have an account?</Link>
      </form>
    </div>
  );
};

export default Signup;
