import React from "react";
import { useSelector } from "react-redux";
import { getMetricTemp } from "../../func/getMetricTemp";
import getTime from "../../func/getTime";
import { getMeasurement } from "../../store/weatherDataSlice";
import style from "./DailyForecast.module.css";
const DailyForecastItem = (props) => {
  const measurement = useSelector(getMeasurement);
  const timeOffset = useSelector((state) => state.weather.data.timezone_offset);
  const data = getTime(props.dt, "data", timeOffset);

  const tempMax = getMetricTemp(props.temp.max, measurement);
  const tempMin = getMetricTemp(props.temp.min, measurement);
  const condition = props.weather[0].main.toLowerCase();
  const icon = props.weather[0].icon;

  return (
    <>
      <li tabIndex="1" type="link" onClick={() => props.func(props.dataOrder)}>
        <span className={style["daily-forecast-date"]}>{data}</span>
        <img
          className={style["daily-forecast-icon"]}
          src={`/img/weather_status/${icon}.webp`}
          alt={condition}
        />
        <span className={style["daily-forecast-degree"]}>
          {tempMax}/{tempMin}
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
