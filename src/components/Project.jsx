import React from "react";
import PropTypes from "prop-types";
import "./style/Project.css";

function Project({ title, imgSrc, link, description }) {
  return (
    <div id="project">
      <img src={imgSrc} alt="img" id="mainImage" />
      <div id="content">
        <h1 id="title">{title}</h1>
        <p>{description}</p>
        <a href={link} id="link">
          Check It Out On My GitHub
        </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
