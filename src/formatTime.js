export const formatTime = (time) => {
const getSeconds = (time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  const getMinutes = (Math.floor(time / 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  const getHours = (Math.floor(time / 3600)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
