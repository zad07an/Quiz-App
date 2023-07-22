import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import QUIZ_DATA from "../../data/QUIZ_DATA";
import { QuizDataProps } from "../../data/QUIZ_DATA";

interface QuizSliceProps {
  correctAnswers: QuizDataProps[];
  wrongAnswers: QuizDataProps[];
  amountOfCorrectAnswers: number;
  selectedAnswer: string | null;
  isSelected: boolean;
  isDisabled: boolean;
  isLatestQuestion: boolean;
  currentStep: number;
}

const initialState: QuizSliceProps = {
  correctAnswers: [],
  wrongAnswers: [],
  amountOfCorrectAnswers: 0,
  selectedAnswer: null,
  isSelected: false,
  isDisabled: true,
  isLatestQuestion: false,
  currentStep: 0
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestions: state => {
      state.currentStep++;
      state.isLatestQuestion = state.currentStep >= QUIZ_DATA.length - 1;
      state.isSelected = false;
      state.isDisabled = true;
      state.selectedAnswer = null;
    },
    checkAnswer: state => {
      if (state.selectedAnswer) {
        const currentQuestion = QUIZ_DATA[state.currentStep];
        const isCorrectAnswer = state.selectedAnswer === currentQuestion.answer;
        if (isCorrectAnswer) {
          state.correctAnswers.push({ ...currentQuestion, userAnswer: state.selectedAnswer });
          state.amountOfCorrectAnswers += 1;
        } else {
          state.wrongAnswers.push({ ...currentQuestion, userAnswer: state.selectedAnswer });
        }
      }
    },
    selectAnswer: (state, { payload }: PayloadAction<string>) => {
      if (state.selectedAnswer !== payload) {
        state.selectedAnswer = payload;
      }
      state.isSelected = true;
      state.isDisabled = false;
    }
  }
});

export const { nextQuestions, selectAnswer, checkAnswer } = quizSlice.actions;
export default quizSlice.reducer;
