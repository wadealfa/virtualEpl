import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  betEnterComplete,
  load,
  playAmountEnter,
  submitChoice,
} from "../Features/Game/GameSlice";

function PlayAmount() {
  const amounts = [10, 20, 50, 100];
  const dispatch = useDispatch();
  const { choice, playAmount, isLoading } = useSelector((state) => state.game);

  // dispatch(submitCh,))


  const handlePlay = (e) => {
    e.preventDefault();
    const chosenAmount = Number(e.currentTarget.value);
    dispatch(playAmountEnter(chosenAmount));
  };

  console.log("isLoading", isLoading);
  console.log("playAmount", playAmount);
  console.log("choice", choice);
  return (
    <>
      <div className="grid grid-cols-2 text-2xl font-semibold gap-2 p-2">
        {amounts.map((amount) => (
          <button
            disabled={isLoading}
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
