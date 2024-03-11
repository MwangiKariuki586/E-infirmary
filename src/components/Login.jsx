import React from "react";
import "./Login.css";
import lock from "../assets/lock.jpg";
const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="form">
        <img className="lock" src={lock} alt="" />
        <label htmlFor="Full_name">Email</label>
        <input className="input_field" type="email" />
        <label htmlFor="Full_name">Password</label>
        <input className="input_field" type="password" />
        <button className="btn spaced">Submit</button>
      </form>
    </div>
  );
};

export default Login;
