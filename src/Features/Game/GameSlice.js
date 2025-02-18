import { createSlice } from "@reduxjs/toolkit";
import { loadMatches } from "../../Services/apiGame";
import { GameApiSlice, usePostPlayerChoiceMutation } from "./GameApiSlice";

const accountBalance = 0;

const initialGameState = {
  status: "",
  balance: 1000, //or try null and see what happens
  isLoading: false,
  isSelectedChoice:false,
  isSelectedAmount:false,
  matches: [],
  results: [],
  message:
    "congratulations ..... your streak of luck has arrived🎉🎊.Wanna give it another go?You might win more.",
  amountWon: null,
  choice:0,
  playAmount: 0,
};

const gameSlice = createSlice({
  name: "theGame",
  initialState: initialGameState,
  reducers: {
    fetching(state) {
      state.isLoading = true;
    },
    load(state, action) {
      state.isLoading = false;
      state.status = "load";
      state.choice = null;
    },
    choiceEnter(state, action) {
      state.status = "choiceEntry";
      state.isSelectedChoice=true;
      state.choice = action.payload;
    },
    playAmountEnter(state, action) {
      state.status = "playAmountEntry";
      state.playAmount = action.payload;
      state.isSelectedAmount=true;
    },
    betEnterComplete(state) {
      state.isLoading = true;
      state.status = "betEntered";
      state.balance -= state.playAmount;
    },
    signUp(state) {
      state.status = "signUp";
    },
    signUpSubmit(state) {
      state.isLoading = true;
      state.status = "signUpSubmit";
    },
    signUpComplete(state, action) {
      state.balance = accountBalance;
      state.isLoading = false;
      state.status = "loadUserGame";
      state.matches = action.payload;
    },
    playSubmit(state) {
      state.isLoading = true;
      state.status = "playing";
    },
    results(state, action) {
      state.isLoading = false;
      state.balance += action.payload?.results || 0;
      state.status = "showResults";
      state.results = action.payload;
      state.message = action.payload.message;
      state.amountWon = action.payload.results;
    },
  },
});

export const {
  load,
  fetching,
  signUp,
  signUpSubmit,
  signUpComplete,
  playSubmit,
  results,
  betEnterComplete,
  choiceEnter,
  playAmountEnter,
} = gameSlice.actions;

export default gameSlice.reducer;

// export function loadMatch() {
//   //   console.log("Load function called");
//   return async function (dispatch) {
//     // console.log("Inside async function");
//     try {
//       console.log("Before loadMatches");
//       const matches = await loadMatches();
//       //   console.log(matches);
//       console.log("after loadMatches");

//       //   dispatch({ type: "load", payload: matches });
//       dispatch(gameSlice.actions.load(matches)); // ✅ Use the auto-generated action
//     } catch (error) {
//       console.log(error);
//     }
//   };

  //   const matches = loadMatches().then(matches=>console.log(matches));
  // console.log(matches)
// }

export function submitChoice() {
  return async function (dispatch, getState) {
    const state = getState();
    const choice = state.game.choice;
    const playAmount = state.game.playAmount;

    if (!choice || playAmount === 0) {
      console.log("pre load dispatch")
      dispatch(load());
      return;
    }
    dispatch(betEnterComplete());
    console.log("pre betEnterComplete dispatch")

    try {
      const response = await dispatch(
        GameApiSlice.endpoints.postPlayerChoice.initiate({
          oddId: choice,
          betAmount: playAmount,
        })
      ).unwrap();

      dispatch(results(response));
      console.log("post results dispatch")

    } catch (error) {
      console.log(error);
    }
  };
}
