import React from "react";
import { useSelector } from "react-redux";
import { getDaily } from "../../store/weatherDataSlice";
import style from "./DailyForecast.module.css";
import cardStyles from "../UI/card/Card.module.css";
import globalStyles from "../../Global.module.css";

import DailyForecastItem from "./DailyForecastItem";

const DailyForecast = () => {
  const daily = useSelector(getDaily);
  const dailyItem = daily.map((elem, index) => (
    <DailyForecastItem {...elem} key={`day-${index}`} />
  ));

  return (
    <div
      className={`${style["daily-forecast"]} ${globalStyles["grid-item"]} ${cardStyles.card} ${globalStyles["bg-blur"]}`}
    >
      <div className={`${cardStyles["card-placeholder"]} ${globalStyles.flex}`}>
        <img id="image" src="/img/app_icons/8day.webp" />
        <span>8 days forecast</span>
      </div>
      <ul className={style["daily-forecast-list"]}>{dailyItem}</ul>
    </div>
  );
};

export default DailyForecast;
