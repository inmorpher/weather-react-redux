import React, { useRef } from "react";
import styles from "./Search.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeather,
  getMeasurement,
  setMeasurement,
} from "../../store/weatherDataSlice";

const Search = (props) => {
  console.log(props.state === "idle");
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
    console.log("nav");
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
      className={`${styles.search} ${
        props.state === "idle" ? styles["search-idle"] : ""
      }`}
    >
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="type your city..."
          name="weather search"
          ref={inputRef}
        />

        <button className={styles["search-form-btn"]} type="submit"></button>
        <button
          className={styles["search-location-btn"]}
          onClick={geoLocationHandler}
          type="none"
        ></button>
      </form>
      {!props.state && (
        <div className={`${styles["search-controls"]}`}>
          <a
            href=""
            className={measurement === "metric" ? styles.active : ""}
            onClick={setMeasurementMetric}
          >
            metric: °C, m/s
          </a>
          <a
            href=""
            className={measurement === "imperial" ? styles.active : ""}
            onClick={setMeasurementImperial}
          >
            imperial: °F, mph
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
