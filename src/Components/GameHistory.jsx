import { useState } from "react";

function GameHistory() {
  const [history, setHistory] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div className="p-2 border border-x-0 my-3 text-center">
      {history.map((history) => (
    <span className="p-2 text-xl font-semibold " key={history}>{history}</span>
      ))}
    </div>
  );
}

export default GameHistory;
