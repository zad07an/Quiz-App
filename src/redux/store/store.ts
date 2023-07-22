import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import quizReducer from "../features/quiz-slice";
import userReducer from "../features/user-slice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    user: userReducer
  }
});

export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
