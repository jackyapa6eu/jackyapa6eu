const day = 1000 * 60 * 60 * 24;
const hour = 1000 * 60 * 60;
const minute = 1000 * 60;

const zeroMask = (value: number) => {
  const strValue = value.toString();

  return strValue.length < 2 ? '0' + strValue : strValue;
};

export const getTimeObject = (timeStamp: number) => {
  let currTimeStamp = timeStamp;
  const days = Math.floor(currTimeStamp / day);
  currTimeStamp -= days * day;
  const hours = Math.floor(currTimeStamp / hour);
  currTimeStamp -= hours * hour;
  const minutes = Math.floor(currTimeStamp / minute);
  currTimeStamp -= minutes * minute;
  const seconds = Math.floor(currTimeStamp / 1000);

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
  return `${days ? zeroMask(days) + ':' : ''}${hours ? zeroMask(hours) + ':' : '00:'}${zeroMask(minutes)}:${zeroMask(seconds)}`;
};

export const wrapLinksInText = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const wrappedText = text.replace(urlRegex, (url) => {
    if (url.startsWith('https://pm.garpix.com/browse/')) {
      const linkText = url.split('/').pop();
      if (linkText !== undefined)
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
    }
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });

  return wrappedText;
};
