import React from "react";
import styles from "./Hourly.module.css";
import getTime from "../../func/getTime";
import { getWindDirection } from "../../func/getWindDirection";
import { getMetricTemp } from "../../func/getMetricTemp";
import { getMetricWind } from "../../func/getMetricWind";

const HourlyItem = (props) => {
  const temp = getMetricTemp(props.temp, props.measurement);
  const wind = getMetricWind(props.wind_speed, props.measurement);
  return (
    <li>
      <span className={styles.time}>
        {getTime(props.dt, "hours", props.offset)}
      </span>
      <img src={`/img/weather_status/${props.weather[0].icon}.webp`} />
      <span className={styles.degrees}>{temp}</span>
      <span className={styles["wind-direction"]}>
        {`${getWindDirection(props.wind_deg)} ${wind}`}
      </span>
    </li>
  );
};

export default HourlyItem;
