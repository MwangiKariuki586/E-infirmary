import React from "react";
import "./Categories.css";
const Categories = () => {
  return (
    <div className="main">
      <h1 className="categories_heading">Categories</h1>
      <div className="categories">
        <div className="cateqories1">
          <div className="card">Medical Prescriptions</div>
          <div className="card">Buy Medicine</div>
        </div>
        <div className="categories2">
          <div className="card ">
            <span className="rotated">Patient's profile</span>
          </div>
          <div className="categories3">
            <div className="card">Talk to a doctor</div>
            <div className="categories4">
              <div className="card">Faqs</div>
              <div className="card">About</div>
            </div>
          </div>
        </div>
      </div>
      <div className="progress">
        <div className="span"></div>
        <div className="span1"></div>
        <div className="span2">
          <div className="h3">your progress</div>
          <div className="progress_bar">87%</div>
        </div>
        <div className="span3"></div>
      </div>
    </div>
  );
};

export default Categories;
