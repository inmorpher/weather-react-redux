const getTime = (date, value = "full") => {
  const data = new Date(date * 1000);

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
  const month = months[data.getMonth()].toString();
  const day = numberHandler(data.getDate());
  const hours = numberHandler(data.getHours());
  const minutes = numberHandler(data.getMinutes());

  if (value === "full") return `${month} ${day}, ${hours}:${minutes}`;
  if (value === "hours") return `${hours}:${minutes}`;
};

export default getTime;
