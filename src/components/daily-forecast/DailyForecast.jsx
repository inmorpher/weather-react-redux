import React from "react";
import { useSelector } from "react-redux";
import { getDaily } from "../../store/weatherDataSlice";
import { useState } from "react";
import styles from "./DailyForecast.module.css";
import cardStyles from "../UI/card/Card.module.css";
import globalStyles from "../../Global.module.css";

import DailyForecastItem from "./DailyForecastItem";
import DailyForecastFull from "./DailyForecastFull";

const DailyForecast = () => {
  const [openFolder, setOpenFolder] = useState();

  const daily = useSelector(getDaily);
  console.log(daily);

  const itemOpenHandler = (index) => {
    setOpenFolder(index);
  };

  const itemCloseHandler = (event) => {
    event.preventDefault();
    setOpenFolder(0);
  };

  let dailyItem;
  if (!openFolder) {
    dailyItem = daily.map((elem, index) => (
      <DailyForecastItem
        {...elem}
        key={`day-${index + 1}`}
        func={itemOpenHandler}
        dataOrder={index + 1}
      />
    ));
  } else {
    dailyItem = <DailyForecastFull {...daily[openFolder + 1]} />;
  }

  return (
    <div
      className={`${styles["daily-forecast"]} ${globalStyles["grid-item"]} ${cardStyles.card} ${globalStyles["bg-blur"]}`}
    >
      <div className={`${cardStyles["card-placeholder"]} ${globalStyles.flex}`}>
        <img id="image" src="/img/app_icons/8day.webp" />
        <span>8 days forecast</span>
      </div>
      {openFolder ? (
        <a className={cardStyles["card-close"]} onClick={itemCloseHandler}>
          <img src="/img/app_icons/trinagle.svg" />
        </a>
      ) : null}

      <ul className={styles["daily-forecast-list"]}>{dailyItem}</ul>
    </div>
  );
};

export default DailyForecast;
