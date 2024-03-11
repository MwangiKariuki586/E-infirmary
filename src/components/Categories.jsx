import React from "react";
import "./Categories.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Categories = () => {
  return (
    <div className="">
      <h1 className="heading">Categories</h1>
      <div className="categories">
        <div className="categories1">
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
      <h2 className="heading">Health Facts</h2>
      <div className="health_facts">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          interval={3000}
          autoPlay={true}
        >
          <div className="health_fact">
            <h3>Malaria</h3>
            <p>
              Did you know that an infected mother can also pass the disease to
              her baby at birth. This is known as congenital malaria
            </p>
          </div>
          <div className="health_fact">
            <h3>Malaria</h3>
            <p>
              Did you know that an infected mother can also pass the disease to
              her baby at birth. This is known as congenital malaria
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
