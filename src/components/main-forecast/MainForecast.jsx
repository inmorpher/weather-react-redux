import { useSelector } from "react-redux";
import { getMain } from "../../store/weatherDataSlice";
import { getMetricTemp } from "../../func/getMetricTemp";

import getTime from "../../func/getTime";

import Card from "../UI/card/Card";

import styles from "./MainForecast.module.css";
const MainForecast = () => {
  const { current, locationName, measurement, timeOffset } =
    useSelector(getMain);

  const currentDate = getTime(current.dt, "full", timeOffset);
  const currentTemp = getMetricTemp(current.temp, measurement);
  const currentIcon = `./img/weather_status/${current.weather[0].icon}.webp`;
  const currentCondition = current.weather[0].main.toLowerCase();

  const cardProps = {
    type: "",
    classStyle: styles["main-forecast"],
    title: "",
    placeholder: false,
    structure: "main",
  };
  return (
    <Card {...cardProps}>
      <div className={styles["main-forecast-location"]}>
        <span className={styles["main-forecast-city-name"]}>
          {locationName}
        </span>
        <span>{currentDate}</span>
      </div>
      <img src={currentIcon} alt={currentCondition} />
      <div className={styles["main-forecast-degree"]}>
        <span>{currentTemp}</span>
        <span>{currentCondition}</span>
      </div>
    </Card>
  );
};

export default MainForecast;
