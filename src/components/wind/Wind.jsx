import React from "react";
import styles from "./Wind.module.css";
import globalStyles from "../../Global.module.css";
import cardStyles from "../UI/card/Card.module.css";
import { useSelector } from "react-redux";
import { getMeasurement, getWind } from "../../store/weatherDataSlice";
import { getMetricWind } from "../../func/getMetricWind";

const Wind = () => {
  const { windSpeed, windDegree, windGust } = useSelector(getWind);
  console.log(1);
  const measurement = useSelector(getMeasurement);
  console.log(Boolean(windGust));
  const speed = getMetricWind(windSpeed, measurement);
  const gust = windGust && getMetricWind(windGust, measurement);
  return (
    <div
      className={`${globalStyles["grid-item"]} ${cardStyles.card} ${globalStyles["bg-blur"]}`}
    >
      <div className={`${cardStyles["card-placeholder"]} ${globalStyles.flex}`}>
        <img id="image" src="/img/app_icons/wind.webp" alt="wind" />
        <span>wind</span>
      </div>
      <div className={`${cardStyles["card-content"]} ${globalStyles.flex}`}>
        <div>
          <span className={styles["wind-speed"]}>{speed}</span>
        </div>
        <div className={`${styles["wind-image"]}`}>
          <img
            className={styles["wind-face"]}
            src="/img/app_icons/wind_dir.webp"
            alt="wind face"
          />
          <img
            className={styles["wind-arrow"]}
            src="/img/app_icons/wind_dir_arrow.webp"
            alt="wind arrow"
            style={{ transform: `Rotate(${windDegree}deg)` }}
          />
        </div>
        <div>
          <span className={styles["gust-speed"]}>gust: {gust}</span>
        </div>
      </div>
    </div>
  );
};

export default Wind;
