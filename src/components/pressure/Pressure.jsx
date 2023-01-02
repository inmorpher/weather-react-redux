import React from "react";

import styles from "./Pressure.module.css";
import globalStyles from "../../Global.module.css";
import cardStyles from "../UI/card/Card.module.css";

import { useSelector } from "react-redux";
import { getPressure } from "../../store/weatherDataSlice";

const Pressure = () => {
  const pressure = useSelector(getPressure);

  const indexScale = 120 / 1100;
  const pressureRange = 300 + pressure * indexScale;

  return (
    <div
      className={`${styles.pressure} ${globalStyles["grid-item"]} ${cardStyles.card} ${globalStyles.padding} ${globalStyles["bg-blur"]}`}
    >
      <div className={`${cardStyles["card-placeholder"]} ${globalStyles.flex}`}>
        <img id="image" src="/img/app_icons/pressure.webp" alt="pressure" />
        <span>pressure</span>
      </div>
      <div className={`${cardStyles["card-content"]} ${globalStyles.flex}`}>
        <div>1022hPa</div>
        <div className={cardStyles["card-content-main"]}>
          <div className={styles["pressure-img"]}>
            <img
              className={styles["bar-face"]}
              src="/img/app_icons/bar.webp"
              alt="bar face"
            />
            <img
              className={styles["bar-arrow"]}
              src="/img/app_icons/bar-arrow.webp"
              style={{ transform: `rotate(${pressureRange}deg)` }}
              alt="bar arrow"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Pressure;
