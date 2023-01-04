export const getMetricTemp = (degree, measurement) => {
  if (measurement === "imperial")
    return `${Math.ceil((degree * 9) / 5 + 32)}°F`;
  if (measurement === "metric") return `${degree.toFixed("0")}°C`;
};
