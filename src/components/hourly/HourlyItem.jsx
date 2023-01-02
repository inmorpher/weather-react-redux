import React from "react";
import styles from "./Hourly.module.css";
import getTime from "../../func/getTime";
import { getWindDirection } from "../../func/getWindDirection";
const HourlyItem = (props) => {
  return (
    <li>
      <span className={styles.time}>{getTime(props.dt, "hours")}</span>
      <img src={`/img/weather_status/${props.weather[0].icon}.webp`} />
      <span className={styles.degrees}>{Math.ceil(props.temp)}°C</span>
      <span className={styles["wind-direction"]}>
        {`${getWindDirection(props.wind_deg)} ${props.wind_speed.toFixed(
          "1"
        )}m/s`}
      </span>
    </li>
  );
};

export default HourlyItem;
