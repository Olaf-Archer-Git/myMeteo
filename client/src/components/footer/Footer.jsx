import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__link">
        <a
          href="https://github.com/Olaf-Archer-Git/mymeteo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className="footer__text">Oleg Todoriko. olto@protonmail.com</p>
      <div className="footer__link">
        <a
          href="https://www.linkedin.com/in/oleh-todoriko-506699231/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
