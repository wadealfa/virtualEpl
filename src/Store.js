import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./R1Components/GameReducer";
import theGameReducer from "./Features/Game/GameSlice";
import { GameApiSlice } from "./Features/Game/GameApiSlice";
// import GameApiSliceReducer from "./Features/Game/GameApiSlice";

const store = configureStore({
  reducer: {
    [GameApiSlice.reducerPath]: GameApiSlice.reducer,
    game:theGameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GameApiSlice.middleware),
});

export default store;
