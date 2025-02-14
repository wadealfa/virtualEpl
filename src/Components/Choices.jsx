import { useState } from "react";
import {
  useGetMatchesQuery,
  usePostPlayerChoiceMutation,
} from "../Features/Game/GameApiSlice";
import Alert from "./Alert";
import { choiceEnter } from "../Features/Game/GameSlice";
import { useDispatch, useSelector } from "react-redux";

function Choices({}) {
  const { data,  error } = useGetMatchesQuery();
  const match = data?.matches[0];
  const {choice,isLoading} = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const selectedChoice = e.currentTarget.value;
    dispatch(choiceEnter(selectedChoice));
  };
  console.log("choice", choice);

  return (
    <div>
      <div className="flex  flex-col gap-2 p-0 m-0 text-2xl">
        {match?.map((game, index) => (
          <button disabled={isLoading}
            onClick={handleSubmit}
            className={isLoading?"bg-gray-400 rounded-md p-1":`focus:bg-[#ff6600] p-1 border-2 rounded-md `}
            key={index}
            value={game.oddId}>
            {game.type}
            <p>{game.odds}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Choices;

{
  /* <div className="flex  flex-col gap-2 p-0 m-0 text-2xl">
<span className=" p-1 border-2 rounded-md ">Home</span>
<span className=" p-1 border-2 rounded-md ">Draw</span>
<span className=" p-1 border-2 rounded-md ">Away</span>
</div> */
}

//===============================================================
//gpt's best version of this code

// import { useState } from "react";
// import {
//   useGetMatchesQuery,
//   usePostPlayerChoiceMutation,
// } from "../Features/Game/GameApiSlice";
// import Alert from "./Alert";

// function Choices() {
//   const [choice, setChoice] = useState(null);
//   const { data, isLoading, error } = useGetMatchesQuery();
//   const [postChoice, { data: results, isLoading: isPosting, error: postError }] =
//     usePostPlayerChoiceMutation();

//   const match = data?.matches?.[0] || [];

//   const handleSubmit = async (e) => {
//     const oddId = e.currentTarget.value;
//     if (!oddId) return;

//     setChoice((prev) => oddId); // Functional update for state safety

//     try {
//       const response = await postChoice({ oddId }).unwrap();
//       console.log("Response from backend:", response);
//     } catch (error) {
//       console.error("Error posting choice:", error);
//     }
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading matches...</p>
//       ) : error ? (
//         <Alert message="Failed to load matches" type="error" />
//       ) : (
//         <div className="flex flex-col gap-2 p-0 m-0 text-2xl">
//           {match.map((game, index) => (
//             <button
//               key={index}
//               value={game.oddId}
//               onClick={handleSubmit}
//               className="p-1 border-2 rounded-md"
//               disabled={isPosting} // Prevent multiple clicks during API call
//             >
//               {game.type}
//               <p>{game.odds}</p>
//             </button>
//           ))}
//         </div>
//       )}

//       {postError && <Alert message="Failed to submit choice" type="error" />}
//       {results && <Alert message="Choice submitted successfully!" type="success" />}
//     </div>
//   );
// }

// export default Choices;
