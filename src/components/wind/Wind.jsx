/* Import hooks and functions */
import { useSelector } from "react-redux";
import { getMeasurement, getWind } from "../../store/weatherDataSlice";
import { getMetricWind } from "../../func/getMetricWind";
/* Import Card UI component */
import Card from "../UI/card/Card";
/* Import styles */
import styles from "./Wind.module.css";

const Wind = () => {
  const { windSpeed, windDegree, windGust, measurement } = useSelector(getWind);
  /* Converting wind speed up on measurement */
  const speed = getMetricWind(windSpeed, measurement);
  /* If wind gust exist execute metric wind conversion up on measurement */
  const gust = windGust && getMetricWind(windGust, measurement);

  const cardProps = {
    type: "wind",
    classStyle: styles.wind,
    title: "wind",
    placeholder: true,
    structure: "column",
  };

  return (
    <Card {...cardProps}>
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
        {/* if gust exist show gust speed */}
        {gust && <span className={styles["gust-speed"]}>gust: {gust}</span>}
      </div>
    </Card>
  );
};

export default Wind;
