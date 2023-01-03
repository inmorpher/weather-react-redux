import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/weatherDataSlice";

import GridWrapper from "./components/UI/grid/GridWrapper";
import MainForecast from "./components/main-forecast/MainForecast";
import Search from "./components/search/Search";
import Hourly from "./components/hourly/Hourly";
import Precipitation from "./components/precipitation/Precipitation";
import Wind from "./components/wind/Wind";
import Feeling from "./components/feeling/Feeling";
import DailyForecast from "./components/daily-forecast/DailyForecast";
import Uv from "./components/uv/Uv";
import Pressure from "./components/pressure/Pressure";
import Humidity from "./components/humidity/Humidity";
import SunPosition from "./components/sun-position/SunPosition";
import BackgroundLayout from "./components/UI/backgroundLayout/BackgroundLayout";

const App = () => {
  const weatherStatus = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const dataStatus = useSelector((state) => state.weather.loading);
  // useEffect(() => {
  //   dispatch(fetchWeather({ value: "odesa", type: "direct" }));
  // }, []);

  console.log(Boolean(weatherStatus.data));
  console.log(dataStatus);

  let content;

  if (dataStatus === "idle") content = <Search />;
  // if (Boolean(weatherStatus)) content = <p>data here</p>;

  if (dataStatus === "loaded") {
    content = (
      <>
        <BackgroundLayout />
        <GridWrapper>
          <MainForecast />
          <Search />
          <Hourly />
          <Precipitation />
          <Wind />
          <Feeling />
          <DailyForecast />
          <Uv />
          <Pressure />
          <Humidity />
          <SunPosition />
        </GridWrapper>
      </>
    );
  }
  return content;
};

export default App;
