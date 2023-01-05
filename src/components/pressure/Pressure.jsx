import { useSelector } from "react-redux";
import { getPressure } from "../../store/weatherDataSlice";

import Card from "../UI/card/Card";

import styles from "./Pressure.module.css";

const Pressure = () => {
  const pressure = useSelector(getPressure);

  const indexScale = 120 / 1100;
  const pressureRange = 300 + pressure * indexScale;

  const cardProps = {
    type: "pressure",
    classStyle: styles.pressure,
    title: "pressure",
    placeholder: true,
    structure: "column",
  };
  return (
    <Card {...cardProps}>
      <div>1022hPa</div>
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
      <div></div>
    </Card>
  );
};

export default Pressure;
