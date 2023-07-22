import React from "react";
import { useAppSelector } from "../redux/store/store";
import { QuizDataProps } from "../data/QUIZ_DATA";

interface ResultComponentProps {
  correctAnswers: QuizDataProps[];
  wrongAnswers: QuizDataProps[];
  amountOfCorrectAnswers: number;
  firstName: string | null;
  lastName: string | null;
}

const resultHOC = (Component: React.FC<ResultComponentProps>) => {
  return () => {
    const { correctAnswers, wrongAnswers, amountOfCorrectAnswers } = useAppSelector(
      state => state.quiz
    );
    const { firstName, lastName } = useAppSelector(state => state.user);

    return (
      <Component
        correctAnswers={correctAnswers}
        wrongAnswers={wrongAnswers}
        amountOfCorrectAnswers={amountOfCorrectAnswers}
        firstName={firstName}
        lastName={lastName}
      />
    );
  };
};

export default resultHOC;
