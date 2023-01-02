import { configureStore } from "@reduxjs/toolkit";
import weatherDataReducer from "./weatherDataSlice";

export default configureStore({
  reducer: {
    weather: weatherDataReducer,
  },
});
