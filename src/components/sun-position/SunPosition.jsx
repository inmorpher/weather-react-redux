import React from "react";
import { useSelector } from "react-redux";
import getTime from "../../func/getTime";

import globalStyles from "../../Global.module.css";
import { getSunPosition } from "../../store/weatherDataSlice";
import cardStyles from "../UI/card/Card.module.css";

const SunPosition = () => {
  const { sunrise, sunset } = useSelector(getSunPosition);
  const timeOffset = useSelector((state) => state.weather.data.timezone_offset);
  return (
    <div
      className={`sun-position ${globalStyles["grid-item"]} ${cardStyles.card} ${globalStyles["bg-blur"]}`}
    >
      <div className={`${cardStyles["card-placeholder"]} ${globalStyles.flex}`}>
        <img id="image" src="/img/app_icons/sun.webp" alt="sun-position" />
        <span>sun position</span>
      </div>
      <div className={`${cardStyles["card-content"]} ${globalStyles.flex}`}>
        <div></div>
        <div>
          <span>Sunrise: {getTime(sunrise, "hours", timeOffset)}</span>
          <span>Sunset: {getTime(sunset, "hours", timeOffset)}</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SunPosition;
