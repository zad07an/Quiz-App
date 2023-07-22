import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { useNavigate } from "react-router-dom";
import { checkAnswer, nextQuestions } from "../redux/features/quiz-slice";
import QUIZ_DATA from "../data/QUIZ_DATA";

interface QuizMainComponentProps {
  isLatestQuestion: boolean;
  currentStep: number;
  isDisabled: boolean;
  handleNextQuestions: () => void;
}

const quizHOC = (Component: React.FC<QuizMainComponentProps>) => {
  return () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isLatestQuestion, currentStep, isDisabled } = useAppSelector(state => state.quiz);

    const handleNextQuestions = () => {
      try {
        if (isLatestQuestion) {
          setTimeout(() => {
            navigate("/result");
          }, 0);
        } else {
          dispatch(checkAnswer());
          dispatch(nextQuestions());
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Component
        isLatestQuestion={isLatestQuestion}
        isDisabled={isDisabled}
        currentStep={currentStep}
        handleNextQuestions={handleNextQuestions}
      />
    );
  };
};

export default quizHOC;
