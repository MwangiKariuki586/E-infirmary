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
      <div className="most_searched">
        <h2>Trending Searches</h2>
        <div className="search-item">
          <h4>Remedy for Herpes</h4>
          <p>140k Searches</p>
        </div>
        <div className="search-item">
          <h4>Morning after pill</h4>
          <p>100k Searches</p>
        </div>
        <div className="search-item">
          <h4>Remedy for Blood pressure</h4>
          <p>90k Searches</p>
        </div>
        <div className="search-item">
          <h4>Best water temperature for medicine</h4>
          <p>80k Searches</p>
        </div>
        <div className="search-item">
          <h4>Family planning pills</h4>
          <p>60k Searches</p>
        </div>
        <div className="search-item">
          <h4>Treatment for Flu</h4>
          <p>30k Searches</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
