import { useContext } from "react";
import { PomodorContext } from "../PomodoroContext";

function SessionLength() {
  const {
    sessionLength,
    sessionDecrementHandle,
    sessionIncrementHandle
  } = useContext(PomodorContext);
  return (
    <div id="session-container">
      <p id="session-label">Session Length</p>
      <div id="session-btn-container">
        <button id="session-decrement" onClick={sessionDecrementHandle}>
          -
        </button>
        <p id="session-length">{sessionLength}</p>
        <button id="session-increment" onClick={sessionIncrementHandle}>
          +
        </button>
      </div>
    </div>
  );
}

function BreakLength() {
  const {
    breakLength,
    breakIncrementHandle,
    breakDecrementHandle
  } = useContext(PomodorContext);

  return (
    <div id="break-container">
      <p id="break-label">Break Length</p>
      <div id="break-btn-container">
        <button id="break-decrement" onClick={breakDecrementHandle}>
          -
        </button>
        <p id="break-length">{breakLength}</p>
        <button id="break-increment" onClick={breakIncrementHandle}>
          +
        </button>
      </div>
    </div>
  );
}

export function BreakSession() {
  return (
    <div id="break-session-container">
      <BreakLength />
      <SessionLength />
    </div>
  );
}
