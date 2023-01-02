import React from "react";
import styles from "./Wind.module.css";
import globalStyles from "../../Global.module.css";
import cardStyles from "../UI/card/Card.module.css";
import { useSelector } from "react-redux";
import { getWind } from "../../store/weatherDataSlice";

const Wind = () => {
  const { windSpeed, windDegree, windGust } = useSelector(getWind);

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
          <span className={styles["wind-speed"]}>{windSpeed}m/s</span>
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
          <span className={styles["gust-speed"]}>gust: {windGust}m/s</span>
        </div>
      </div>
    </div>
  );
};

export default Wind;
