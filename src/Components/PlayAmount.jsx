import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  betEnterComplete,
  load,
  playAmountEnter,
  playSubmit,
  submitChoice,
} from "../Features/Game/GameSlice";

function PlayAmount({ amounts, setChosenAmount,  }) {
  const [playAmount, setPlayAmount] = useState(0);
  const dispatch = useDispatch();
  const {choice,isLoading} = useSelector((state) => state.game);

  // dispatch(submitCh,playAmount))

  const intervalRef = useRef(null);
  const counterRef = useRef(0);
  useEffect(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        counterRef.current += 1;
        if (counterRef.current === 3) {
          console.log("success", playAmount);
        } else if (counterRef.current === 10) {
          if (!choice) {
            dispatch(load());
            return;
          }
          console.log("success 20");
          dispatch(betEnterComplete());
          // dispatch(playSubmit());
        } else if (counterRef.current === 15) {
          console.log("success 30");
          dispatch(submitChoice());

          counterRef.current = 0;
        }
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        console.log("Clearing interval:", intervalRef.current);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [dispatch]);
  
  const handlePlay = (e) => {
    e.preventDefault();
    const chosenAmount = Number(e.currentTarget.value);
    dispatch(playAmountEnter(chosenAmount));
    setPlayAmount(chosenAmount);
    setChosenAmount(chosenAmount);
  };
  
  console.log(isLoading)
  return (
    <>
      <div className="grid grid-cols-2 text-2xl font-semibold gap-2 p-2">
        {amounts.map((amount) => (
          <button disabled={isLoading}
            className=" bg-[#0554e7] rounded-lg hover:border-2 
            hover:drop-shadow-2xl hover:text-[#FF6600] hover:font-bold  transition-all duration-100  hover:border-[#FF6600]"
            key={amount}
            value={amount}
            onClick={handlePlay}>
            {amount}
          </button>
        ))}
      </div>
    </>
  );
}

export default PlayAmount;
