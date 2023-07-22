import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { selectAnswer } from "../redux/features/quiz-slice";
import { QuizDataProps } from "../data/QUIZ_DATA";

interface AnswerBoxProps {
  item: QuizDataProps;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { selectedAnswer } = useAppSelector(state => state.quiz);

  const handleSelectAnswer = (someOpiton: string) =>
    someOpiton && dispatch(selectAnswer(someOpiton));

  return (
    <>
      {item.options?.map((option, index: number) => (
        <div
          key={index}
          className={` w-full flex items-center gap-2 px-2 py-2 rounded-md border-2 cursor-pointer ${
            selectedAnswer === option ? "border-blue-500" : "border-gray-300"
          } transition-all`}
          onClick={() => handleSelectAnswer(option)}
        >
          <p>
            {index + 1}. {option}
          </p>
        </div>
      ))}
    </>
  );
};

export default AnswerBox;
