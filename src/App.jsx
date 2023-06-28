import "./App.css";
import { Heading } from "./components/Heading";
import { BreakSession } from "./components/BreakSession";
import { Timer } from "./components/Timer";

function App() {
  return (
    <div className="pomodoro-container">
      <Heading />
      <Timer />
      <BreakSession />
    </div>
  );
}

export default App;
