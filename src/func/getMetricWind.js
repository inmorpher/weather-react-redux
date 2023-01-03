export const getMetricWind = (wind, measurement) => {
  if (measurement === "imperial") return `${(wind * 2.237).toFixed(1)}mph`;
  if (measurement === "metric") return `${wind.toFixed(1)}m/s`;
};
