import { FC, useEffect, useRef, useState } from 'react';
import { getTimeElapsed, getTimeStr } from '../../utils/helpers';
import { observer } from 'mobx-react-lite';

interface ITimeCounterProps {
  timeStamp: number | null;
}

export const TimeCounter: FC<ITimeCounterProps> = observer(({ timeStamp }) => {
  const [currentTime, setCurrentTime] = useState<string>('00:00:00');

  const isTimerOn = useRef<boolean>(false);
  const timeStampRef = useRef<number | null>(null);

  const handleTime = () => {
    if (timeStampRef.current) {
      const time = getTimeStr(getTimeElapsed(timeStampRef.current));
      setCurrentTime(time);
      document.title = time;
      setTimeout(() => {
        isTimerOn.current = true;
        handleTime();
      }, 1000);
    } else {
      setCurrentTime('00:00:00');
      document.title = 'Трекинг времени';
      isTimerOn.current = false;
    }
  };

  useEffect(() => {
    timeStampRef.current = timeStamp;
    if (!isTimerOn.current) handleTime();
  }, [timeStamp]);

  return <span>{currentTime}</span>;
});
