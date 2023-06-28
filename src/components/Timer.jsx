import { useContext } from "react";
import { PomodorContext } from "../PomodoroContext";

export function Timer() {
  const {
    timeLeft,
    status,
    startStopHandle,
    resetHandle,
    AudioBeep
  } = useContext(PomodorContext);

  const timeFormatter = timer => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    return `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div id="timer-container">
      <p id="timer-label">{status}</p>
      <p id="time-left">{timeFormatter(timeLeft)}</p>
      <div id="timer-btn">
        <button id="start_stop" onClick={startStopHandle}>
          Start
        </button>
        <button id="reset" onClick={resetHandle}>
          Reset
        </button>
      </div>
      <audio
        id="beep"
        preload="auto"
        ref={AudioBeep}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
}
