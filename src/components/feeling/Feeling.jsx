import { useSelector } from "react-redux";
import { getFeelsLike } from "../../store/weatherDataSlice";
import { getMetricTemp } from "../../func/getMetricTemp";

import Card from "../UI/card/Card";

import styles from "./Feeling.module.css";

const Feeling = () => {
  const { temp, feeling, measurement } = useSelector(getFeelsLike);

  let feelingDesc;
  if (feeling > temp) feelingDesc = "feels wormer";
  else if (feeling < temp) feelingDesc = "feels colder";
  else feelingDesc = "feels same";

  const cardProps = {
    type: "feeling",
    classStyle: styles.feeling,
    title: "feels like",
    placeholder: true,
    structure: "column",
  };
  return (
    <Card {...cardProps}>
      <div></div>
      <div>
        <p>{getMetricTemp(feeling, measurement)}</p>
      </div>
      <div>
        <span>{feelingDesc}</span>
      </div>
    </Card>
  );
};

export default Feeling;
