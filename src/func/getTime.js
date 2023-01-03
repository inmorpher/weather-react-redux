const getTime = (date, value = "full", offset = 0) => {
  const data = new Date((date + offset) * 1000);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Checking if number is < 10. True return with 0 before. False return number
  const numberHandler = (number) => (number < 10 ? `0${number}` : `${number}`);
  const month = months[data.getUTCMonth()].toString();
  const day = numberHandler(data.getUTCDate());
  const hours = numberHandler(data.getUTCHours());
  const minutes = numberHandler(data.getUTCMinutes());

  if (value === "full") return `${month} ${day}, ${hours}:${minutes}`;
  if (value === "hours") return `${hours}:${minutes}`;
  if (value === "data") return `${month} ${day}`;
};

export default getTime;
