import React, { useEffect } from "react";
import { useSelector } from "react-redux";

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
import StickyFrame from "./components/UI/stickyFrame/StickyFrame";
import Loading from "./components/UI/loading/Loading";
import Card from "./components/UI/card/Card";

const App = () => {
  const dataStatus = useSelector((state) => state.weather.loading);

  let content;

  if (dataStatus === "idle")
    content = (
      <Card>
        <Search state={"idle"} />
      </Card>
    );
  if (dataStatus === "loading") content = <Loading />;
  if (dataStatus === "loaded") {
    content = (
      <>
        <StickyFrame />
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
