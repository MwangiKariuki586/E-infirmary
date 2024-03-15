import React from "react";
import e_logo from "../assets/hospital logo.jpeg";
import { IoSettingsOutline } from "react-icons/io5";
import "./search.css";
const Search = () => {
  return (
    <div className="search_wrapper">
      <div className="search_menu">
        <img className="e_logo" src={e_logo} alt="" />
        <input type="search" className="search_bar" placeholder="Search" />
        <IoSettingsOutline />
      </div>
    </div>
  );
};

export default Search;
