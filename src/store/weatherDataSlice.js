import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchWeather = createAsyncThunk("/weather", async () => {
  const generalDataRes = await fetch("/general.json");
  const generalData = await generalDataRes.json();
  const weatherDataRes = await fetch("/weather.json");
  const weatherData = await weatherDataRes.json();
  const combineData = { ...generalData[0], ...weatherData };
  return combineData;
});

export const weatherDataSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
  },
});
// Actions
export const getCurrent = (state) => state.weather.data.current;
export const getLocationGeneral = (state) => {
  return `${state.weather.data.name}, ${state.weather.data.country}`;
};
export const getHourly = (state) => state.weather.data.hourly;
export const getPrecipitation = (state) => state.weather.data.minutely;
export const getWind = (state) => {
  return {
    windSpeed: state.weather.data.current.wind_speed.toFixed("1"),
    windDegree: state.weather.data.current.wind_deg.toFixed("1"),
    windGust: state.weather.data.current.wind_gust.toFixed("1"),
  };
};
export const getFeelsLike = (state) => {
  return {
    temp: Math.ceil(state.weather.data.current.temp),
    feeling: Math.ceil(state.weather.data.current.feels_like),
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

export const { setWeatherData } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
