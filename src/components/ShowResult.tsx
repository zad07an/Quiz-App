import React from "react";
import { QuizDataProps } from "../data/QUIZ_DATA";
import Question from "./Question";
import { IoClose } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";

const ShowResult: React.FC<QuizDataProps> = ({ id, question, answer, userAnswer }) => {
  return (
    <div key={id} className=" w-full flex items-start gap-2 border-t-2 border-gray-200 py-2">
      <div className=" text-gray-700">
        <p>No.{id}</p>
      </div>
      <div className=" flex items-start flex-col gap-2">
        <div>
          <Question>Հարցը: {question}</Question>
        </div>
        <div
          className={` flex items-center gap-1 ${
            answer === userAnswer ? "text-green-600" : "text-red-600"
          }`}
        >
          <p>Ձեր պատասխանը: "{userAnswer}"</p>
          {answer === userAnswer ? <BsCheckLg /> : <IoClose />}
        </div>
        <div className=" flex items-center gap-1 text-green-600">
          <p>Ճիշտ պատասխանը: "{answer}"</p>
          <BsCheckLg />
        </div>
      </div>
    </div>
  );
};

export default ShowResult;
