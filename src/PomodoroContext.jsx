import { useState, createContext, useEffect, useRef } from "react";

export const PomodorContext = createContext();
export const PomodoroProvider = ({ children }) => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState("Session");

  const AudioBeep = useRef(null);

  useEffect(() => {
    let interval;

    if (active) {
      interval = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(prev => prev - 1);
        } else {
          if (timeLeft === 0 && status === "Session") {
            setStatus("Break");
            setTimeLeft(breakLength * 60);

            AudioBeep.current.play();
          } else if (timeLeft === 0 && status === "Break") {
            setStatus("Session");
            setTimeLeft(sessionLength * 60);
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [active, timeLeft]);

  //break decrement button
  const breakDecrementHandle = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
    return breakLength;
  };

  //break increment button
  const breakIncrementHandle = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
    return breakLength;
  };

  // session decrement button
  const sessionDecrementHandle = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft(timeLeft - 60);
    }
    return sessionLength;
  };

  // session increment button
  const sessionIncrementHandle = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft(timeLeft + 60);
    }
    return sessionLength;
  };

  //start stop button
  const startStopHandle = () => {
    if (!active) {
      console.log("start btn");
      setActive(true);
    } else {
      console.log("start false");
      setActive(false);
    }
  };

  // reset button
  const resetHandle = () => {
    setActive(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(1500);
    setStatus("Session");
    AudioBeep.current.pause();
    AudioBeep.current.currentTime = 0;
  };

  //Pomodoro value
  const PomodoroValue = {
    breakLength,
    sessionLength,
    breakDecrementHandle,
    breakIncrementHandle,
    sessionDecrementHandle,
    sessionIncrementHandle,
    timeLeft,
    status,
    startStopHandle,
    resetHandle,
    AudioBeep
  };
  return (
    <PomodorContext.Provider value={PomodoroValue}>
      {children}
    </PomodorContext.Provider>
  );
};
