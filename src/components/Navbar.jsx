import React from "react";
import PropTypes from "prop-types";
import "./style/Navbar.css";
import logo from "../assets/logo.png";

function Navbar({ elements }) {
  const openSideBar = () => {
    const links = document.getElementById("Links");
    const linkStyle = window.getComputedStyle(links);
    const flexDirection = linkStyle.getPropertyValue("flex-direction");

    if (flexDirection !== "row") {
      links.style.width = "90px";
      const closeButton = document.createElement("div");
      closeButton.textContent = "X";
      closeButton.id = "closeButton";
      closeButton.addEventListener("click", closeSideBar);
      links.append(closeButton);
    }
  };

  const closeSideBar = () => {
    const links = document.getElementById("Links");
    links.style.width = "0";
    const closeButton = document.getElementById("closeButton");
    if (closeButton) closeButton.remove();
  };

  return (
    <nav>
      <img src={logo} alt="Logo" id="openButton" onClick={openSideBar}></img>
      <div id="Links">{elements}</div>
    </nav>
  );
}

Navbar.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Navbar;
