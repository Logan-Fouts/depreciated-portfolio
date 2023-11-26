import React from "react";
import PropTypes from "prop-types";
import "./style/Navbar.css";
import logo from "../assets/logo.png";

function Navbar({ elements }) {
  return (
    <nav>
      <img src={logo} alt="Logo"></img>
      <div id="Links">{elements}</div>
    </nav>
  );
}

Navbar.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Navbar;
