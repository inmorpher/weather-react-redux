import { useSelector } from "react-redux";
import { getHumidity } from "../../store/weatherDataSlice";
import { getMetricTemp } from "../../func/getMetricTemp";

import Card from "../UI/card/Card";

import styles from "./Humidity.module.css";

const Humidity = () => {
  const { humidity, dewPoint, measurement } = useSelector(getHumidity);

  const metricDewPoint = getMetricTemp(dewPoint, measurement);

  const cardProps = {
    type: "humidity",
    classStyle: styles.humidity,
    title: "humidity",
    placeholder: true,
    structure: "column",
  };
  return (
    <Card {...cardProps}>
      <div></div>
      <div>
        <p>{humidity}%</p>
      </div>
      <div>
        <span>dew point: {metricDewPoint}</span>
      </div>
    </Card>
  );
};

export default Humidity;
