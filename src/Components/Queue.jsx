import { useGetMatchesQuery } from "../Features/Game/GameApiSlice";

// function Queue() {
//   const matches = [
//     { teamA: "wolves", draw: "Draw", teamB: "Leeds" },
//     { teamA: "Abd", draw: "Draw", teamB: "GHJ" },
//     { teamA: "wallstreet", draw: "Draw", teamB: "Jpmorgan" },
//   ];
//   const was= 123;

//   const x = useGetMatchesQuery();
//   console.log(x);

//   const { data } = useGetMatchesQuery();
//   data?.matches.forEach((element) => {
//     return element;
//   });

//   return (
//     <div>
//       {matches.map((match, index) => (
//         <div
//           key={index}
//           className="grid grid-cols-3  text-center  text-2xl  border-2 p-2 px-0 my-2 text-wrap ">
//           <span>{match.teamA}</span>
//           <span>{match.draw}</span>
//           <span>{match.teamB}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

function Queue() {
  const { data } = useGetMatchesQuery();
  return (
    <div>
      {data?.matches.map((match, i) => (
        <div
          className="grid grid-cols-3  text-center  text-2xl  border-2 p-2 px-0 my-2 text-wrap "
          key={i}>
          {match.map((game, index) => (
            <span
              className=" rounded border  m-2 "
              key={index}>
              {game.type}
              <p>{game.odds}</p>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Queue;
