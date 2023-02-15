import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import movieSearchReducer from "../features/movies/movieSearchSlice";

export const store = configureStore({
  reducer: {
    movieSearch: movieSearchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
