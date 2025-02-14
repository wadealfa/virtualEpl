import { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../Features/Game/GameSlice";

function Match() {
  const data = [
    { teamA: "Arsenal", teamB: "Wolves" },
    { teamA: "Liverpool", teamB: "Bornemouth" },
    { teamA: "Aston villa", teamB: "Newcastle" },
    { teamA: "Manchester United", teamB: "Fullham" },
    { teamA: "Chelsea", teamB: "Everton" },
    { teamA: "Brighton", teamB: "Tottenham" },
    { teamA: "Nottingham forest", teamB: "Manchester city" },
  ];

  const matches = useSelector((store) => {
    console.log("Full store state:", store);
    console.log("theGame slice:", store.theGame);
    return store.theGame.matches;
  });
  console.log(matches);

  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.game.isloading);
  // console.log(isLoading);

  const [playerChoice, setPlayersChoice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(load());
    // if (playerChoice)return
    setPlayersChoice(e.target.value);
  }
  // console.log(playerChoice);

  return (
    <>
      <h1 className="text-xl font-semibold italic text-center">
        Ongoing Matches
      </h1>
      {data.map((teams, index) => (
        <div
          key={index}
          className="border-2 p-2 m-8 flex gap-7 rounded-3xl">
          <div className="border-2 border-l-0 rounded-r-full  py-3 pr-3 min-w-40 ">
            <h3>{teams.teamA}</h3>
            <span className="mx-2">vs</span>
            <h3>{teams.teamB}</h3>
          </div>
          <div
            disabled={isLoading}
            className={`w-full p-2 flex gap-5 items-center justify-center  transition-transform ease-in duration-500 ${
              isLoading
                ? "absolute transform translate-x-[1200px] blur-sm pointer-events-none"
                : " transform translate-x-0 transition-transform ease-in-out duration-500"
            }`}>
            <Button
              disabled={isLoading}
              className=""
              onClick={handleSubmit}
              value="Home">
              Home <span>({teams.teamA})</span>
            </Button>
            <Button
              disabled={isLoading}
              onClick={handleSubmit}
              value="Draw">
              Draw
            </Button>
            <Button
              disabled={isLoading}
              onClick={handleSubmit}
              value="Away">
              Away <span>({teams.teamB})</span>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Match;
