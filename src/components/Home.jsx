import React, { useEffect, useState } from "react";
import stethoscope from "../assets/MEDICAL.jpg";
import doc_1 from "../assets/doc 1.jpg";
import doc_3 from "../assets/doc 3.jpg";
import "./home.css";
import { Link } from "react-router-dom";
const home = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    // Define a function to handle changes in media query
    const handleMediaQueryChange = (mediaQuery) => {
      setMatches(mediaQuery.matches);
    };

    // Initial check
    handleMediaQueryChange(mediaQuery);

    // Listen for changes in media query
    const mediaQueryListener = () => handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(mediaQueryListener);

    // Clean up function
    return () => {
      mediaQuery.removeListener(mediaQueryListener);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const linkStyles = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <div className="home">
      <div className="images">
        {matches && <img className="stethoscope" src={doc_3} alt="" />}
        <img className="stethoscope" src={doc_1} />
      </div>
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
