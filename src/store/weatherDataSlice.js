import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  measurement: "metric",
  loading: "idle",
  data: {},
  error: "",
};

export const fetchWeather = createAsyncThunk("/weather", async (data) => {
  console.log(data);

  const { value, type } = data;
  const API_KEY = "35769c5f7789446e56583879cfcce960";

  let GENERAL_API_REQUEST;
  if (type === "reverse") {
    const LAT = value[0];
    const LONG = value[1];
    GENERAL_API_REQUEST = `https://api.openweathermap.org/geo/1.0/reverse?lat=${LAT}&lon=${LONG}&limit=3&appid=${API_KEY}`;
  } else if (type === "direct") {
    const cityName = value;
    GENERAL_API_REQUEST = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=3&appid=${API_KEY}`;
  }

  const generalDataRes = await fetch(GENERAL_API_REQUEST);
  const generalData = await generalDataRes.json();
  const latitude = generalData[0].lat;
  const longitude = generalData[0].lon;
  const WEATHER_API_REQUEST = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
  const weatherDataRes = await fetch(WEATHER_API_REQUEST);
  const weatherData = await weatherDataRes.json();
  const combineData = { ...generalData[0], ...weatherData };
  return combineData;
});

export const weatherDataSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setMeasurement: (state, action) => {
      state.measurement = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = "";
      state.loading = "loaded";
    });
  },
});
// Actions
export const getMeasurement = (state) => state.weather.measurement;
export const getCurrent = (state) => state.weather.data.current;
export const getLocationGeneral = (state) => {
  return `${state.weather.data.name}, ${state.weather.data.country}`;
};
export const getHourly = (state) => state.weather.data.hourly;
export const getPrecipitation = (state) => state.weather.data.minutely;
export const getWind = (state) => {
  return {
    windSpeed: state.weather.data.current.wind_speed,
    windDegree: state.weather.data.current.wind_deg,
    windGust: state.weather.data.current.wind_gust,
  };
};
export const getFeelsLike = (state) => {
  return {
    temp: state.weather.data.current.temp,
    feeling: state.weather.data.current.feels_like,
  };
};

export const getDaily = (state) => state.weather.data.daily;
export const getUv = (state) => state.weather.data.current.uvi;
export const getPressure = (state) => state.weather.data.current.pressure;
export const getHumidity = (state) => {
  return {
    humidity: state.weather.data.current.humidity,
    dewPoint: state.weather.data.current.dew_point,
  };
};
export const getSunPosition = (state) => {
  return {
    sunrise: state.weather.data.current.sunrise,
    sunset: state.weather.data.current.sunset,
  };
};

export const { setWeatherData, setMeasurement } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
