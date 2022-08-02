import React from "react";
import PropTypes from "prop-types";
import { format, add } from "date-fns";

import "./NextDay.scss";

const NextDay = (props) => {
  const data = props.data.search;
  const temp = data.days && data.days[1].temp;
  const feel = data.days && data.days[1].feelslike;
  const minTemp = data.days && data.days[1].tempmin;
  const maxTemp = data.days && data.days[1].tempmax;
  const windspeed = data.days && data.days[1].windspeed;
  const description = data.days && data.days[1].description;

  const tomorrowFns = add(new Date(), {
    days: 1,
  });

  return (
    <section className="next">
      <div className="next__content">
        <h2 className="home__title">{data.address}</h2>
        <p className="home__item subtitle">
          {format(new Date(tomorrowFns), " dd MMM eeee")}
        </p>
        <p className="home__item">
          temp<span>{Math.round(temp)}</span> &#8451;
        </p>
        <p className="home__item">
          feels like<span>{Math.round(feel)}</span> &#8451;
        </p>
        <p className="home__item">
          min temp<span>{Math.round(minTemp)}</span> &#8451;
        </p>
        <p className="home__item">
          max temp<span>{Math.round(maxTemp)}</span> &#8451;
        </p>
        <p className="home__item">
          windspeed<span>{Math.round(windspeed)} km/h</span>
        </p>
        <p className="home__item">{description}</p>
      </div>
    </section>
  );
};

NextDay.propTypes = {
  data: PropTypes.object,
};

export default NextDay;
