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
    if (condition >= 600 && condition <= 622) {
      weatherEffect = new SnowBg(canvas.current);
      weatherEffect.start();
    } else if (condition >= 500 && condition <= 531) {
      weatherEffect = new RainBg(canvas.current, "100");
      weatherEffect.start();
    }
    return () => {
      weatherEffect && weatherEffect.reset();
    };
  }, [condition]);
  let bgStyles;
  if ((clouds < 50 && time < sunrise) || (clouds < 50 && time > sunset)) {
    bgStyles = `${styles["night-time"]}`;
    document.body.style.backgroundColor = "#1e2b58";
  } else if (clouds < 50 && time > sunrise && time < sunset) {
    bgStyles = `${styles["day-time"]}`;
    document.body.style.backgroundColor = "#024996";
  } else if (clouds < 50 || (condition >= 500 && condition <= 622)) {
    bgStyles = `${styles["full-clouds"]}`;
    document.body.style.backgroundColor = "#3c5369";
  } else {
    bgStyles = `${styles["full-clouds"]}`;
    document.body.style.backgroundColor = "#3c5369";
  }
  return (
    <div className={`${styles["dinamic-background"]} ${bgStyles}`}>
      <canvas id="dinamic-bg" ref={canvas}></canvas>
    </div>
  );
};

export default DimanicBackground;
