import React from "react";
import { useSelector } from "react-redux";
import { getDaily } from "../../store/weatherDataSlice";
import { useState } from "react";
import styles from "./DailyForecast.module.css";
import cardStyles from "../UI/card/Card.module.css";

import DailyForecastItem from "./DailyForecastItem";
import DailyForecastFull from "./DailyForecastFull";
import Card from "../UI/card/Card";

const DailyForecast = () => {
  const [openFolder, setOpenFolder] = useState(0);

  const daily = useSelector(getDaily);

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
    dailyItem = <DailyForecastFull {...daily[openFolder - 1]} />;
  }

  const cardProps = {
    type: "8day",
    classStyle: styles["daily-forecast"],
    title: "8-day forecast",
    placeholder: true,
    structure: "main",
  };

  return (
    <Card {...cardProps}>
      {openFolder ? (
        <a
          className={styles["daily-forecast-close"]}
          onClick={itemCloseHandler}
        >
          <img src="/img/app_icons/trinagle.svg" />
        </a>
      ) : null}

      <ul className={styles["daily-forecast-list"]}>{dailyItem}</ul>
    </Card>
  );
};

export default DailyForecast;
