import { useSelector } from "react-redux";
import { getUv } from "../../store/weatherDataSlice";

import Card from "../UI/card/Card";

import styles from "./Uv.module.css";

const Uv = () => {
  const uvi = useSelector(getUv);

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
  const cardProps = {
    type: "uv",
    classStyle: styles["uv-index"],
    title: "uv-index",
    placeholder: true,
    structure: "column",
  };
  return (
    <Card {...cardProps}>
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
    </Card>
  );
};

export default Uv;
