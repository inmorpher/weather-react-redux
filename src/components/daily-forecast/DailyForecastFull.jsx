import React from "react";
import styles from "./DailyForecast.module.css";
// import globalStyles from "../../Global.module.css";
import { useSelector } from "react-redux";
import getTime from "../../func/getTime";
import { getMetricTemp } from "../../func/getMetricTemp";
import { getMeasurement } from "../../store/weatherDataSlice";
import { getMetricWind } from "../../func/getMetricWind";
import { getWindDirection } from "../../func/getWindDirection";

const DailyForecastFull = (props) => {
  const timeOffset = useSelector((state) => state.weather.data.timezone_offset);
  const measurement = useSelector(getMeasurement);
  console.log(props);

  const dayTemp = [
    props.temp.morn,
    props.temp.day,
    props.temp.eve,
    props.temp.night,
  ];

  const feelsLikeTemp = [
    props.feels_like.morn,
    props.feels_like.day,
    props.feels_like.eve,
    props.feels_like.night,
  ];
  return (
    <>
      <div className={styles["daily-forecast-more"]}>
        <span className={styles["date"]}>
          {getTime(props.dt, "data", timeOffset)}
        </span>
        <div className={styles["weather"]}>
          <img
            src={`/img/weather_status/${props.weather[0].icon}.webp`}
            alt="weather"
          />
          <div className={styles["daily-forecast-more-main"]}>
            <span className={styles["weather-condition"]}>
              {props.weather[0].main.toLowerCase()}
            </span>
            <span className={styles["degree-description"]}>
              this day high will be{" "}
              <strong>{getMetricTemp(props.temp.max, measurement)}</strong>, low
              will be{" "}
              <strong>{getMetricTemp(props.temp.min, measurement)}</strong>
            </span>
          </div>
        </div>
        <div className={styles.conditions}>
          <span className={styles["conditions-humidity"]}>
            <img src="/img/app_icons/humidity.webp" alt="humidity" />
            humidity: {props.humidity}%
          </span>
          <span className={styles["conditions-wind"]}>
            <img src="/img/app_icons/wind.webp" alt="wind" />
            {getMetricWind(props.wind_speed, measurement)}{" "}
            {getWindDirection(props.wind_deg)}
          </span>
          <span className={styles["conditions-pressure"]}>
            <img src="/img/app_icons/pressure.webp" alt="pressure" />
            {props.pressure}hPa
          </span>
          <span className={styles["conditions-uv"]}>
            <img src="/img/app_icons/uv.webp" alt="uv" />
            UV: {props.uvi}
          </span>
          {props.dew_point && (
            <span className={styles["conditions-dew"]}>
              dew point: {getMetricTemp(props.dew_point, measurement)}
            </span>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Morning</th>
              <th>Afternoon</th>
              <th>Evening</th>
              <th>Night</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>temperature</td>
              {dayTemp.map((elem) => (
                <td key={`day-${elem}`}>{getMetricTemp(elem, measurement)}</td>
              ))}
            </tr>
            <tr>
              <td>feels like</td>
              {feelsLikeTemp.map((elem) => (
                <td key={`feels-like-${elem}`}>
                  {getMetricTemp(elem, measurement)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <span>
          sunrise: {getTime(props.sunrise, "hours", timeOffset)} sunset:{" "}
          {getTime(props.sunset, "hours", timeOffset)}
        </span>
      </div>
    </>
  );
};

export default DailyForecastFull;
