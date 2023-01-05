import { useSelector } from "react-redux";
import { getSunPosition } from "../../store/weatherDataSlice";
import getTime from "../../func/getTime";

import Card from "../UI/card/Card";

import styles from "./SunPosition.module.css";

const SunPosition = () => {
  const { sunrise, sunset, timeOffset } = useSelector(getSunPosition);
  const cardProps = {
    type: "sun_position",
    classStyle: styles["sun-position"],
    title: "sun position",
    placeholder: true,
    structure: "column",
  };
  return (
    <Card {...cardProps}>
      <div></div>
      <div>
        <span>Sunrise: {getTime(sunrise, "hours", timeOffset)}</span>
        <span>Sunset: {getTime(sunset, "hours", timeOffset)}</span>
      </div>
      <div></div>
    </Card>
  );
};

export default SunPosition;
