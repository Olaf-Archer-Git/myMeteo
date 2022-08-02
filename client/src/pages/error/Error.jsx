import React from "react";

import "./Error.scss";

const Error = () => {
  return (
    <section className="error">
      <div className="error__container-up">container One</div>
      <div className="error__container">
        <div className="error__content">
          <div className="error__title">
            4<span>0</span>4
          </div>
          <div className="error__text">
            sorry, the page you are looking for cannot be found
          </div>
          <div className="error__btn">
            <a href="/" className="error__link">
              go back
            </a>
          </div>
        </div>
      </div>
      <div className="error__container-down">container Two</div>
    </section>
  );
};

export default Error;
