import React, { useState } from "react";
import PropTypes from "prop-types";
import { format, fromUnixTime } from "date-fns";
import chevron from "../../assets/chevron.svg";

import "./Week.scss";

const Week = (props) => {
  const data = props.data.search;
  const [selected, setSelected] = useState(null);
  const toggle = (index) => {
    return selected === index ? setSelected(null) : setSelected(index);
  };

  const days = [
    {
      unix: data.days && data.days[1].datetimeEpoch,
      temp: data.days && data.days[1].temp,
      minTemp: data.days && data.days[1].tempmin,
      maxTemp: data.days && data.days[1].tempmax,
      description: data.days && data.days[1].description,
    },
    {
      unix: data.days && data.days[2].datetimeEpoch,
      temp: data.days && data.days[2].temp,
      minTemp: data.days && data.days[2].tempmin,
      maxTemp: data.days && data.days[2].tempmax,
      description: data.days && data.days[2].description,
    },
    {
      unix: data.days && data.days[3].datetimeEpoch,
      temp: data.days && data.days[3].temp,
      minTemp: data.days && data.days[3].tempmin,
      maxTemp: data.days && data.days[3].tempmax,
      description: data.days && data.days[3].description,
    },
    {
      unix: data.days && data.days[4].datetimeEpoch,
      temp: data.days && data.days[4].temp,
      minTemp: data.days && data.days[4].tempmin,
      maxTemp: data.days && data.days[4].tempmax,
      description: data.days && data.days[4].description,
    },
    {
      unix: data.days && data.days[5].datetimeEpoch,
      temp: data.days && data.days[5].temp,
      minTemp: data.days && data.days[5].tempmin,
      maxTemp: data.days && data.days[5].tempmax,
      description: data.days && data.days[5].description,
    },
    {
      unix: data.days && data.days[6].datetimeEpoch,
      temp: data.days && data.days[6].temp,
      minTemp: data.days && data.days[6].tempmin,
      maxTemp: data.days && data.days[6].tempmax,
      description: data.days && data.days[6].description,
    },
    {
      unix: data.days && data.days[7].datetimeEpoch,
      temp: data.days && data.days[7].temp,
      minTemp: data.days && data.days[7].tempmin,
      maxTemp: data.days && data.days[7].tempmax,
      description: data.days && data.days[7].description,
    },
  ];

  return (
    <section className="week">
      <div className="accordion">
        {days.map((item, index) => {
          return (
            <div key={index} className="accordion__item">
              <div
                className="accordion__title"
                onClick={() => {
                  toggle(index);
                }}
              >
                {item.unix &&
                  format(new Date(fromUnixTime(item.unix)), "d MMM eeee")}
                <img
                  src={chevron}
                  className={`accordion__icon ${
                    selected === index ? "collapsed" : ""
                  }`}
                />
              </div>
              <div
                className={`accordion__answer ${
                  selected === index ? "show" : ""
                }`}
              >
                <p className="accordion__subtitle">
                  temp <span>{Math.round(item.temp)}</span> &#8451;
                </p>

                <p className="accordion__subtitle">
                  min temp <span>{Math.round(item.minTemp)}</span> &#8451;
                </p>
                <p className="accordion__subtitle">
                  max temp <span>{Math.round(item.maxTemp)}</span> &#8451;
                </p>
                <p className="accordion__subtitle">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

Week.propTypes = {
  data: PropTypes.object,
};
export default Week;
