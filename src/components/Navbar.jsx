import React, { useState } from "react";
import "./Navbar.css";
import { RiHome7Line, RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlineCategory } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import the_blueprint from "../assets/the_blueprint.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [clickedIcon, setClickedIcon] = useState(null);

  const handleClick = (iconName) => {
    if (clickedIcon === iconName) {
      setClickedIcon(null); // Re-clicking the same icon will revert its size
    } else {
      setClickedIcon(iconName);
    }
  };

  const getIconStyle = (iconName) => {
    if (iconName === "profile") {
      return {
        border: clickedIcon === iconName ? "2px solid #ffaa44" : "none",
      };
    }

    return {
      transform: clickedIcon === iconName ? "scale(1.5)" : "scale(1)",
    };
  };
  const linkStyles = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <div className="wrapper">
      <nav className="navbar">
        <Link to={"/categories"} style={linkStyles}>
          <MdOutlineCategory
            style={getIconStyle("MdOutlineCategory")}
            onClick={() => handleClick("MdOutlineCategory")}
          />
        </Link>
        <Link to={"/search"} style={linkStyles}>
          <BsSearch
            style={getIconStyle("BsSearch")}
            onClick={() => handleClick("BsSearch")}
          />
        </Link>
        <Link to={"/"} style={linkStyles}>
          <RiHome7Line
            style={getIconStyle("RiHome7Line")}
            onClick={() => handleClick("RiHome7Line")}
          />
        </Link>
        <Link to={"/login"} style={linkStyles}>
          <RiLogoutCircleRLine
            style={{
              ...getIconStyle("RiLogoutCircleRLine"),
              rotate: "-90deg",
            }}
            onClick={() => handleClick("RiLogoutCircleRLine")}
          />
        </Link>
        <Link to={"/profile"} style={linkStyles}>
          <img
            className="profile"
            src={the_blueprint}
            alt=""
            style={getIconStyle("profile")}
            onClick={() => handleClick("profile")}
          />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
