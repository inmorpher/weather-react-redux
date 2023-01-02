import React from "react";

import styles from "./Humidity.module.css";
import globalStyles from "../../Global.module.css";
import cardStyles from "../UI/card/Card.module.css";

import { useSelector } from "react-redux";
import { getHumidity } from "../../store/weatherDataSlice";

const Humidity = () => {
  const { humidity, dewPoint } = useSelector(getHumidity);
  return (
    <div
      className={`${styles.humidity} ${globalStyles["grid-item"]} ${cardStyles.card} ${globalStyles["bg-blur"]}`}
    >
      <div className={`${cardStyles["card-placeholder"]} ${globalStyles.flex}`}>
        <img id="image" src="/img/app_icons/humidity.webp" alt="humidity" />
        <span>humidity</span>
      </div>
      <div className={`${cardStyles["card-content"]} ${globalStyles.flex}`}>
        <div></div>
        <div>
          <p>{humidity}%</p>
        </div>
        <div>
          <span>dew point: {Math.ceil(dewPoint)}°C</span>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
