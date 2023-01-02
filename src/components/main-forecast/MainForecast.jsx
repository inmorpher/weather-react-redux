import React from "react";
import { useSelector } from "react-redux";
import { getCurrent, getLocationGeneral } from "../../store/weatherDataSlice";

import styles from "./MainForecast.module.css";
import globalStyles from "../../Global.module.css";

import getTime from "../../func/getTime";

const MainForecast = () => {
  const mainData = useSelector(getCurrent);
  const locationName = useSelector(getLocationGeneral);

  const currentDate = getTime(mainData.dt);
  const currentTemp = Math.ceil(mainData.temp) + "°C";
  const currentIcon = `./img/weather_status/${mainData.weather[0].icon}.webp`;
  const currentCondition = mainData.weather[0].main.toLowerCase();

  return (
    <div
      className={`${styles["main-forecast"]} ${globalStyles["grid-item"]} ${globalStyles["bg-blur"]} ${globalStyles.flex}`}
    >
      <div className={styles["main-forecast-location"]}>
        <span className={styles["main-forecast-city-name"]}>
          {locationName}
        </span>
        <span>{currentDate}</span>
      </div>
      <img src={currentIcon} alt="" />
      <div className={styles["main-forecast-degree"]}>
        <span>{currentTemp}</span>
        <span>{currentCondition}</span>
      </div>
    </div>
  );
};

export default MainForecast;
