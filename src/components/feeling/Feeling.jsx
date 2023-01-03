import React from "react";

import styles from "./Feeling.module.css";
import globalStyles from "../../Global.module.css";
import cardStyles from "../UI/card/Card.module.css";
import { useSelector } from "react-redux";
import { getFeelsLike, getMeasurement } from "../../store/weatherDataSlice";
import { getMetricTemp } from "../../func/getMetricTemp";
("card-placeholder flex");
const Feeling = () => {
  const { temp, feeling } = useSelector(getFeelsLike);
  const measurement = useSelector(getMeasurement);

  let feelingDesc = "";
  if (feeling > temp) feelingDesc = "feels wormer";
  else if (feeling < temp) feelingDesc = "feels colder";
  else feelingDesc = "feels same";

  return (
    <div
      className={`${styles.feeling} ${globalStyles["grid-item"]} ${cardStyles.card} ${globalStyles["bg-blur"]}`}
    >
      <div className={`${cardStyles["card-placeholder"]} ${globalStyles.flex}`}>
        <img id="image" src="/img/app_icons/feels_like.webp" />
        <span>feeling</span>
      </div>
      <div className={`${cardStyles["card-content"]} ${globalStyles.flex}`}>
        <div></div>
        <div>
          <p>{getMetricTemp(feeling, measurement)}</p>
        </div>
        <div>
          <span>{feelingDesc}</span>
        </div>
      </div>
    </div>
  );
};

export default Feeling;
