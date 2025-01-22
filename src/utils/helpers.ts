const day = 1000 * 60 * 60 * 24;
const hour = 1000 * 60 * 60;
const minute = 1000 * 60;

const zeroMask = (value: number) => {
  const strValue = value.toString();

  return strValue.length < 2 ? '0' + strValue : strValue;
};

export const getTimeObject = (timeStamp: number) => {
  const days = Math.floor(timeStamp / day);
  const hours = Math.floor((timeStamp % (days || 1)) / hour);
  const minutes = Math.floor((timeStamp % (hour || 1)) / minute);
  const seconds = Math.floor((timeStamp % (minute || 1)) / 1000);

  return { days, hours, minutes, seconds };
};

export const getTimeElapsed = (timestamp: number | null) => {
  const elapsedMs = Date.now() - timestamp;

  if (elapsedMs < 0 || timestamp === null) return null;

  return getTimeObject(elapsedMs);
};

export const getTimeStr = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return `${days ? zeroMask(days) + ':' : ''}${hours ? zeroMask(hours) + ':' : '0:'}${zeroMask(minutes)}:${zeroMask(seconds)}`;
};
