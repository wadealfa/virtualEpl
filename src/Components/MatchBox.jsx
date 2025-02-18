import { useEffect, useRef, useState } from "react";
import Choices from "./Choices";
import PlayAmount from "./PlayAmount";
import Queue from "./Queue";
import { useDispatch, useSelector } from "react-redux";
import {
  betEnterComplete,
  load,
  submitChoice,
} from "../Features/Game/GameSlice";
import Spinner from "./Spinner";

function MatchBox() {
  const dispatch = useDispatch();
  const { choice, isLoading } = useSelector((state) => state.game);
  const intervalRef = useRef(null);
  const counterRef = useRef(0);

  useEffect(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        counterRef.current += 1;
        if (counterRef.current === 3) {
          console.log("first 3");
        } else if (counterRef.current === 10) {
          // dispatch(load());

          console.log("second to 10");
          if (choice === null) {
            return;
          }
          // dispatch(playSubmit());
        } else if (counterRef.current === 15) {
          console.log("third to 20");

          dispatch(betEnterComplete());
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

  return (
    <div className={`flex flex-col gap-5`}>
      <div className="flex flex-row  gap-2 text-center">
        <div className="flex-none border-red-500  border-2 p-1 w-[50%]">
          <img
            src="./pitch 1.jpg"
            width={200}
            height={100}
            alt=""
          />

          {isLoading && <Spinner />}
        </div>
        <div className=" w-[100%] grid gap-2">
          {isLoading && (
            <div className=" min-w-[170px] min-h-[340px] rounded-lg  absolute  bg-[rgba(177,174,174,0.66)]">
              </div>
            )}
              <Choices />
              <PlayAmount />
        </div>
      </div>
      <div className=" w-[100%]">
        <Queue />
      </div>
    </div>
  );
}

export default MatchBox;
