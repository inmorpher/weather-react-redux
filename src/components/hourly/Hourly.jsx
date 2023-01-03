import React from "react";
import { getHourly, getMeasurement } from "../../store/weatherDataSlice";
import { useSelector } from "react-redux";

import styles from "./Hourly.module.css";
import globalStyles from "../../Global.module.css";
import cardStyles from "../UI/card/Card.module.css";

import HourlyItem from "./HourlyItem";
const Hourly = () => {
  const hourly = useSelector(getHourly);
  const measurement = useSelector(getMeasurement);
  return (
    <div
      className={`${styles["hourly-forecast"]} ${globalStyles["grid-item"]} ${globalStyles["bg-blur"]}`}
    >
      <div className={`${cardStyles["card-placeholder"]} ${globalStyles.flex}`}>
        <img src="/img/app_icons/hourly.webp" alt="hourly forecast" />
        <span>hourly forecast</span>
      </div>
      <ul className={globalStyles.flex}>
        {hourly.map((elem) => (
          <HourlyItem key={elem.dt} {...elem} measurement={measurement} />
        ))}
      </ul>
    </div>
  );
};

export default Hourly;
