import React from "react";
import getTime from "../../func/getTime";
import style from "./DailyForecast.module.css";
const DailyForecastItem = (props) => {
  const data = getTime(props.dt);

  const tempMax = Math.ceil(props.temp.max);
  const tempMin = Math.ceil(props.temp.min);
  const condition = props.weather[0].main.toLowerCase();
  const icon = props.weather[0].icon;

  return (
    <>
      <li tabIndex="1" type="link">
        <span className={style["daily-forecast-date"]}>{data}</span>
        <img
          className={style["daily-forecast-icon"]}
          src={`/img/weather_status/${icon}.webp`}
          alt={condition}
        />
        <span className={style["daily-forecast-degree"]}>
          {tempMax}/{tempMin}°C
        </span>
        <span className={style["daily-forecast-status"]}>{condition}</span>
        <img
          className={style["daily-forecast-toggle"]}
          src="/img/app_icons/trinagle.svg"
          alt="open"
        />
      </li>
    </>
  );
};

export default DailyForecastItem;
