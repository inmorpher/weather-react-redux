import styles from "./DinamicBackgound.module.css";
import { SnowBg } from "./SnowModel";
import { RainBg } from "./RainModel";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  getDynamicWeather,
  getMeasurement,
} from "../../../store/weatherDataSlice";

const DimanicBackground = () => {
  const canvas = useRef();
  const measurement = useSelector(getMeasurement);
  const { sunrise, sunset, time, condition, clouds } =
    useSelector(getDynamicWeather);
  console.log(sunrise, sunset, time, condition, clouds);

  useEffect(() => {
    let weatherEffect;
    if (measurement === "metric") weatherEffect = new SnowBg(canvas.current);
    if (measurement === "imperial")
      weatherEffect = new RainBg(canvas.current, "100");
    weatherEffect.start();
    return () => {
      weatherEffect.reset();
    };
  }, [measurement]);
  let bgStyles;
  if (time < sunrise || time > sunset) {
    bgStyles = `${styles["night-time"]}`;
    document.body.style.backgroundColor = "#1e2b58";
  } else if (time > sunrise && time < sunset) {
    bgStyles = `${styles["day-time"]}`;
    document.body.style.backgroundColor = "#024996";
  }
  return (
    <div className={`${styles["dinamic-background"]} ${bgStyles}`}>
      <canvas id="dinamic-bg" ref={canvas}></canvas>
    </div>
  );
};

export default DimanicBackground;
