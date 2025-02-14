import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../Features/Game/GameSlice";

function Results() {
  const dispatch = useDispatch();
  const { message, amountWon } = useSelector((state) => state.game);

  useEffect(
    function () {
      const timeout = setTimeout(() => {
        dispatch(load());
      }, 4000);

      return () => clearTimeout(timeout);
    },
    [dispatch]
  );
  return (
    <div className="p-2 border-4 border-x-0 my-3 text-center lg:mx-40 mx-8 border-lime-500 shadow-2xl  text-cyan-200 rounded-xl">
      {!amountWon ? (
        <h2 className="text-xl font-bold text-orange-400">{message}</h2>
      ) : (
        <>
          <h2>{message}</h2>{" "}
          <h3 className="p-2 text-xl font-bold text-[#FF6600] ">
            You've won :{" "}
            <span className="text-[#FFD700]"> Ksh {amountWon}</span>
          </h3>
        </>
      )}
    </div>
  );
}



export default Results;
