import React from "react";
import "./profile.css";
import lock from "../assets/lock.jpg";
const Profile = () => {
  return (
    <div className="container">
      <h1>Patient Profile</h1>
      <form className="container">
        <label htmlFor="Full_name">Full name</label>
        <input className="input_field" type="text" />
        <label htmlFor="Full_name">Email</label>
        <input className="input_field" type="email" />
        <label htmlFor="Full_name">Phone</label>
        <input className="input_field" type="number" />
        <label htmlFor="Full_name">Location</label>
        <input className="input_field" type="text" />
        <label htmlFor="Full_name">Allergies</label>
        <input className="input_field" type="text" />
        <label htmlFor="Full_name">Emmergency contact 1</label>
        <input className="input_field" type="number" />
        <label htmlFor="Full_name">Emmergency contact 2</label>
        <input className="input_field" type="number" />
        <label htmlFor="Full_name">Date of birth</label>
        <input className="input_field" type="date" />
        <button className="btn spaced">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
