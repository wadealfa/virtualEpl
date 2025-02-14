import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function GameTimer() {
  const initialTime = 25;
  const [time, setTime] = useState(initialTime);

  const dispatch = useDispatch();
  
  if (time === "abc") {
    dispatch({type:"load"})
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => (time <= 0 ? initialTime : time - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div className="p-2 border-2 text-xl">{time}s</div>;
}

export default GameTimer;
