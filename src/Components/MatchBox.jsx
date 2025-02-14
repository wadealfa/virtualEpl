import { useState } from "react";
import Choices from "./Choices";
import PlayAmount from "./PlayAmount";
import Queue from "./Queue";

function MatchBox() {
  const [choice, setChoice] = useState(0);
  const [chosenamount, setChosenAmount] = useState(0);
  const amounts = [10, 20, 50, 100];

  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-row  gap-2 text-center">
        <div className="flex-none border-red-500  border-2 p-1 w-[50%]">
          <img
            src="./pitch 1.jpg"
            width={200}
            height={100}
            alt=""
          />
        </div>
        <div className=" p-1 w-[100%] grid gap-2  ">
          <Choices
            choice={choice}
            setChoice={setChoice}
          />
          <PlayAmount
            amounts={amounts}
            setChosenAmount={setChosenAmount}
            choice={choice}
          />
        </div>
      </div>
      <div className=" w-[100%]">
        <Queue />
      </div>
    </div>
  );
}

export default MatchBox;
