import React, { useRef } from "react";
import styles from "./Search.module.css";
import globalStyles from "../../Global.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeather,
  getMeasurement,
  setMeasurement,
} from "../../store/weatherDataSlice";

const Search = () => {
  const dispatch = useDispatch();
  const measurement = useSelector(getMeasurement);

  const inputRef = useRef();

  const setMeasurementMetric = (event) => {
    event.preventDefault();
    dispatch(setMeasurement("metric"));
  };

  const setMeasurementImperial = (event) => {
    event.preventDefault();
    dispatch(setMeasurement("imperial"));
  };

  const searchHandler = (event) => {
    event.preventDefault();
    dispatch(fetchWeather({ value: inputRef.current.value, type: "direct" }));
    inputRef.current.value = "";
  };

  const geoLocationHandler = (event) => {
    event.preventDefault();
    console.log(1);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        dispatch(
          fetchWeather({
            value: [position.coords.latitude, position.coords.longitude],
            type: "reverse",
          })
        )
      );
    }
  };
  return (
    //    Search item
    <div
      className={`${styles.search} ${globalStyles["grid-item"]} ${globalStyles.flex}`}
    >
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="type your city..."
          name="weather search"
          ref={inputRef}
        />
        <button
          className={styles["search-location-btn"]}
          onClick={geoLocationHandler}
          type="none"
        ></button>
        <button className={styles["search-form-btn"]} type="submit"></button>
      </form>
      <div
        className={`${styles["search-controls"]} ${globalStyles["bg-blur"]}`}
      >
        <a
          href=""
          className={`${styles.metric} ${measurement === "metric" && "active"}`}
          onClick={setMeasurementMetric}
        >
          metric: °C, m/s
        </a>
        <a
          href=""
          className={`${styles.imperial} ${
            measurement === "imperial" && "active"
          }`}
          onClick={setMeasurementImperial}
        >
          imperial: °F, mph
        </a>
      </div>
    </div>
  );
};

export default Search;
