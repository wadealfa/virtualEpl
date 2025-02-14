import { useSelector } from "react-redux";
import GameHistory from "../Components/GameHistory";
import LoadingSpinner from "../Components/Loading";
import LoadingSpinner2 from "../Components/Loading2";
import MatchBox from "../Components/MatchBox";
import Nav from "../Components/Nav";
import Results from "../Components/Results";

function AppLayout() {
  const status = useSelector((state) => state.game.status);


  return (
    <div>
      <Nav />
      <div>
        <GameHistory />
        {status==="showResults" &&
       <Results />}
        <MatchBox />
      </div>
    </div>
  );
}

export default AppLayout;
