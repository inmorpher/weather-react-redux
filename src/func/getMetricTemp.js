export const getMetricTemp = (degree, measurement) => {
  if (measurement === "imperial")
    return `${Math.round((degree * 9) / 5 + 32)}°F`;
  if (measurement === "metric") return `${degree.toFixed("0")}°C`;
};
