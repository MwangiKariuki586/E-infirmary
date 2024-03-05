import React from "react";
import stethoscope from "../assets/MEDICAL.jpg";
import "./home.css";
const home = () => {
  return (
    <div className="main">
      <img className="stethoscope" src={stethoscope} alt="" />
      <h1 className="decription_heading">We offer medical assistance 24/7</h1>
      <p className="description">
        Regardless of your residence,we acknowledge the fact that most people
        work on a budget and tight shifts
      </p>

      <button className="call_to_action">Get started</button>
    </div>
  );
};

export default home;
