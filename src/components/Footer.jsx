import React from "react";
import "./style/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <h3>Contact Me</h3>
        <div id="contacts">
          <p>
            📧 Email:{" "}
            <a href="mailto:loganfouts@lablogan.net">loganfouts@lablogan.net</a>
          </p>
          <p>📞 Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="social-links">
        <h3>My Socials</h3>
        <div id="socials">
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
