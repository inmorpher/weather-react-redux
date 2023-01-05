import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  measurement: "metric",
  loading: "idle",
  data: {},
  error: "",
};

export const fetchWeather = createAsyncThunk("/weather", async (data) => {
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
      document.body.style.backgroundColor =
        "linear-gradient(180deg, rgba(23,0,255,1) 0%, rgba(255,57,0,1) 100%)";
    });
  },
});
// Actions

export const getMeasurement = (state) => state.weather.measurement;
/* 
  Getting:
   Current data, Location name, Measurement, Timezone offset
  for Main block
*/
export const getMain = (state) => {
  return {
    current: state.weather.data.current,
    locationName: `${state.weather.data.name}, ${state.weather.data.country}`,
    measurement: state.weather.measurement,
    timeOffset: state.weather.data.timezone_offset,
  };
};
/* 
  Getting:
  Hourly, Measurement, Timezone offset
  for Hourly block
*/
export const getHourly = (state) => {
  return {
    hourly: state.weather.data.hourly,
    measurement: state.weather.measurement,
    timeOffset: state.weather.data.timezone_offset,
  };
};
/* 
  Getting:
  Precipitation 
  for Precipitation block
*/
export const getPrecipitation = (state) => state.weather.data.minutely;
/* 
  Getting:
  Wind speed, Wind gust, Wind degree, Measurement 
  for Wind block
*/
export const getWind = (state) => {
  return {
    windSpeed: state.weather.data.current.wind_speed,
    windDegree: state.weather.data.current.wind_deg,
    windGust: state.weather.data.current.wind_gust,
    measurement: state.weather.measurement,
  };
};
/*  
    Getting :
    Temperature, Feeling temperature, Measurement
    for Feeling block 
*/
export const getFeelsLike = (state) => {
  return {
    temp: state.weather.data.current.temp,
    feeling: state.weather.data.current.feels_like,
    measurement: state.weather.measurement,
  };
};

export const getDaily = (state) => state.weather.data.daily;
/*  
    Getting :
    Pressure
    for Pressure block 
*/
export const getUv = (state) => state.weather.data.current.uvi.toFixed("0");
/*  
    Getting :
    Pressure
    for Pressure block 
*/
export const getPressure = (state) => state.weather.data.current.pressure;
/*  
    Getting :
    Humidity, Dew point, Measurement
    for Humidity block 
*/
export const getHumidity = (state) => {
  return {
    humidity: state.weather.data.current.humidity,
    dewPoint: state.weather.data.current.dew_point,
    measurement: state.weather.measurement,
  };
};
/*  
    Getting :
    Sunrise, Sunset, Measurement
    for Sun position block 
*/
export const getSunPosition = (state) => {
  return {
    sunrise: state.weather.data.current.sunrise,
    sunset: state.weather.data.current.sunset,
    timeOffset: state.weather.data.timezone_offset,
  };
};

export const { setWeatherData, setMeasurement } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
