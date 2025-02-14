import toast from "react-hot-toast";

const initialState = {
  amount: 0,
  category: 10,
  playersChoice: "",
  status: "",
  time: 20,
  results: "",
  isloading: true,
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case "load":
      if (!action.payload.category && !action.payload.playersChoice)
        return toast.error("please chose your category class and winning team");
      return {
        ...state,
        category: action.payload.category,
        playersChoice: action.payload.playersChoice,
        status: "loading",
        amount: state.amount + action.payload.category,
      };
    case "finish":
      if (!action.payload.results && !action.payload.amount)
        return toast.error("An error occurred while fetching the result");
      return {
        ...state,
        results: action.payload.results,
        amount: action.payload.amount,
        status: "finished",
        isloading: false,
      };
    case "play":
      return { ...state, status: "playing", isloading: false };
    default:
      return state;
  }
}

export function gameStart(category, playersChoice) {
  return { type: "load", payload: { category, playersChoice } };
}
export function gameResults() {
  return async function (dispatch) {
    const res = await fetch("https://myownbackend.api");
    const data = await res.json();

    const { amount, results } = data;
    dispatch({ type: "finished", payload: { amount, results } });
  };
}
export function testing() {
  return { type: "play" };
}
