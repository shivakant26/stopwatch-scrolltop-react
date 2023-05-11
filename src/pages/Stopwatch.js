import { useEffect, useState } from "react";

const StopWatch = () => {

  const [time, setTime] = useState(0);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 60);
  const milliseconds = time % 60;
  
  const reset = () => {
    setTime(0);
  };
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>
       {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
        </h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>reset</button>
        <button onClick={stop}>Stop</button>
      </div>
    </>
  );
};
export default StopWatch;
