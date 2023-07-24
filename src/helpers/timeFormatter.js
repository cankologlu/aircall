const timeFormatter = (time) => {
  return new Date(time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};


export default timeFormatter;