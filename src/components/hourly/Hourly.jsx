import { getHourly } from "../../store/weatherDataSlice";
import { useSelector } from "react-redux";

import HourlyItem from "./HourlyItem";
import Card from "../UI/card/Card";

import styles from "./Hourly.module.css";

const Hourly = () => {
  const { hourly, measurement, timeOffset } = useSelector(getHourly);

  const cardProps = {
    type: "hourly",
    classStyle: styles["hourly-forecast"],
    title: "hourly",
    placeholder: true,
    structure: "main",
  };
  return (
    <Card {...cardProps}>
      <ul>
        {hourly.map((elem) => (
          <HourlyItem
            key={elem.dt}
            {...elem}
            measurement={measurement}
            offset={timeOffset}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Hourly;
