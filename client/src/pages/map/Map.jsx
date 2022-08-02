import React, { useState } from "react";
import { fromLonLat } from "ol/proj";
import { RMap, ROSM, RLayerTile } from "rlayers";
import { OWP_CLOUDS, OWP_PRECIPITATION, OWP_TEMP } from "../../constants/api";
import "ol/ol.css";
import "rlayers/control/layers.css";
import "./Map.scss";

const Map = () => {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("temp");

  const toggler = () => {
    active === true ? setActive(false) : setActive(true);
  };

  const button = () => {
    text === "temp" ? setText("clouds") : setText("temp");
  };

  const center = fromLonLat([30.5234, 50.4501]);
  return (
    <div className="map">
      <div
        className="map__btn"
        onClick={() => {
          button();
          toggler();
        }}
      >
        {text}
      </div>
      <div>
        {!active ? (
          <div>
            <RMap
              width={"100%"}
              height={"81vh"}
              initial={{ center: center, zoom: 5 }}
            >
              <ROSM />
              <RLayerTile url={OWP_CLOUDS} />
              <RLayerTile url={OWP_PRECIPITATION} />
            </RMap>
          </div>
        ) : (
          <div>
            <RMap
              width={"100%"}
              height={"81vh"}
              initial={{ center: center, zoom: 5 }}
            >
              <ROSM />
              <RLayerTile url={OWP_TEMP} />
            </RMap>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
