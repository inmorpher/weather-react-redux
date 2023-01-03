import React from "react";
import styles from "./Uv.module.css";
import globalStyles from "../../Global.module.css";
import cardStyles from "../UI/card/Card.module.css";
import { useSelector } from "react-redux";
import { getUv } from "../../store/weatherDataSlice";

const Uv = () => {
  const uvi = Math.ceil(useSelector(getUv));

  const uvGrade = [
    { color: "transparent", value: "none" },
    { color: "#00DD00", value: "low" },
    { color: "#A8CD00", value: "low" },
    { color: "#DAC300", value: "moderate" },
    { color: "#DE9100", value: "moderate" },
    { color: "#E06400", value: "moderate" },
    { color: "#DE3800", value: "high" },
    { color: "#DC000B", value: "high" },
    { color: "#CF000D", value: "very high" },
    { color: "#E00065", value: "very high" },
    { color: "#E00090", value: "very high" },
  ];

  return (
    <div
      className={`${styles["uv-index"]} ${globalStyles["grid-item"]} ${cardStyles.card} ${globalStyles["bg-blur"]}`}
    >
      <div className={`${cardStyles["card-placeholder"]} ${globalStyles.flex}`}>
        <img id="image" src="/img/app_icons/uv.webp" />
        <span>UV index</span>
      </div>
      <div className={`${cardStyles["card-content"]} ${globalStyles.flex}`}>
        <div></div>
        <div>
          <div
            className={styles["uv-index-scale"]}
            style={{ backgroundColor: uvGrade[uvi].color }}
          >
            <span>{uvi}</span>
          </div>
        </div>
        <div>
          <span>{uvGrade[uvi].value}</span>
        </div>
      </div>
    </div>
  );
};

export default Uv;
