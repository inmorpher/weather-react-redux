export const getWindDirection = (data = 360) => {
  if ((data >= 0 && data < 5) || (data > 355 && data <= 360)) return "N";
  else if (data > 85 && data < 95) return "E";
  else if (data > 175 && data < 185) return "S";
  else if (data > 265 && data < 275) return "W";
  else if (data >= 5 && data <= 85) return "NE";
  else if (data >= 95 && data <= 175) return "SE";
  else if (data >= 185 && data <= 265) return "SW";
  else if (data >= 275 && data <= 355) return "NW";
};
