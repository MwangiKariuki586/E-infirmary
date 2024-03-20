import React from "react";
import stethoscope from "../assets/MEDICAL.jpg";
import "./home.css";
import { Link } from "react-router-dom";
const home = () => {
  const linkStyles = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <div className="home">
      <img className="stethoscope" src={stethoscope} alt="" />
      <div className="content_wrapper">
        <h1 className="decription_heading">We offer medical assistance 24/7</h1>
        <p className="description">
          Regardless of your residence,we acknowledge the fact that most people
          work on a budget and tight shifts
        </p>
        <Link to={"/categories"} style={linkStyles}>
          <button className="call_to_action">Get started</button>
        </Link>
      </div>
    </div>
  );
};

export default home;
