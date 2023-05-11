import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const [time, setTime] = useState(3);
  const [cong, setCong] = useState();
  const [running, setRunning] = useState(false);
    const navigate = useNavigate()

  useEffect(() => {
    console.log("hellow");
    if (!running) {
      setTimeout(() => {
        setTime(time - 1);
        setInterval(() => {
          if (time === 1) {
            setCong("Congratulation yuvasoft");
            setRunning(true);
            navigate("/")
          }
        }, 1000);
      }, 2000);
    }
  }, [time , running]);

  return (
    <>
      <h1>{cong ? cong : "Page Not Found !"}</h1>
      <p>page will Auto Redirect after {time} Second</p>
    </>
  );
};

export default PageNotFound;
