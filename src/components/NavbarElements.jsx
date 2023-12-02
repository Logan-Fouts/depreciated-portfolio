import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style/NavbarElement.css";

function NavLink({ to, label }) {
  return (
    <Link to={to} className="navbar-link">
      {label}
    </Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const NavbarElements = [
  <NavLink key="home" to="/" label="Home" />,
  <NavLink key="about" to="/about" label="About" />,
  <NavLink key="projects" to="/projects" label="Projects" />,
  <NavLink key="contact" to="/contact" label="Contact" />,
];

export default NavbarElements;
