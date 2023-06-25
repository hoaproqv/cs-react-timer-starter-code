import { useState, useRef, useEffect } from "react";
import { formatTime } from "./formatTime";

const listTimer = [];
const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const [isStart, setIsStart] = useState(false);
  const active = useRef();
  useEffect(() => {
    const refInterval = setInterval(() => {
      if (isStart) {
        setTime((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(refInterval);
  }, [isStart]);

  const startTimer = () => {
    setIsStart(true);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    setIsStart(false);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    setIsStart(false);
    active.current.disabled = false;
    listTimer.length = 0;
  };
  const splitTimer = () => {
    listTimer.push(formatTime(time))
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    listTimer,
    active,
  };
};
export default useTimer;
