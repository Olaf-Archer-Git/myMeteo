import React, { useState } from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import search from "../../assets/search.svg";
import night from "../../assets/night.jpg";
import clear from "../../assets/clear.jpg";
import cloudy from "../../assets/cloudy.jpg";
import fog from "../../assets/fog.jpg";
import nightSky from "../../assets/nightSky.jpg";
import partCloud from "../../assets/partCloud.jpg";
import rain from "../../assets/rain.jpg";
import wind from "../../assets/wind.jpg";

import "./Home.scss";

const Home = ({ data, setLocation }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(input);
    setInput("");
  };

  const getIcon = (icon) => {
    const image = {
      cloudy: cloudy,
      rain: rain,
      fog: fog,
      wind: wind,
      "partly-cloudy-day": partCloud,
      "partly-cloudy-night": nightSky,
      "clear-night": night,
    };
    return image[icon] || clear;
  };

  const time = data.currentConditions && data.currentConditions.datetime;
  const temp = data.currentConditions && data.currentConditions.temp;
  const feel = data.currentConditions && data.currentConditions.feelslike;
  const windspeed = data.currentConditions && data.currentConditions.windspeed;
  const tempMin = data.days && data.days[0].tempmin;
  const tempMax = data.days && data.days[0].tempmax;
  const description = data.days && data.days[0].description;
  const clouds = data.currentConditions && data.currentConditions.icon;

  return (
    <section
      className="home"
      style={{
        backgroundImage: `linear-gradient( rgba(19, 189, 102, 0.5),
                          rgba(9, 109, 142, 0.5)), url("${getIcon(clouds)}")`,
      }}
    >
      <div className="home__container">
        <form className="home__search" onSubmit={handleSubmit}>
          <input
            type="text"
            className="home__input"
            placeholder="search for city..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit" className="home__btn">
            <img className="home__icon" src={search} />
          </button>
        </form>
      </div>

      <div className="home__content">
        <h1 className="home__title">{data.address}</h1>
        <p className="home__item">
          updated
          <span>
            {time && format(new Date(), " dd MMM  " + time.slice(0, 5))}
          </span>
        </p>
        <p className="home__item">
          temperature<span>{Math.round(temp)}</span> &#8451;
        </p>
        <p className="home__item">
          feels like<span>{Math.round(feel)}</span> &#8451;
        </p>
        <p className="home__item">
          wind speed<span>{windspeed} km/h</span>
        </p>
        <p className="home__item">
          temp min<span>{Math.round(tempMin)}</span> &#8451;
        </p>
        <p className="home__item">
          temp max<span>{Math.round(tempMax)}</span> &#8451;
        </p>
        <p className="home__item">{description}</p>
      </div>
    </section>
  );
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
  setLocation: PropTypes.func,
};

export default Home;
