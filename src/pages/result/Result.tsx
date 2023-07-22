import React from "react";
import Box from "../../components/Box";
import ShowResult from "../../components/ShowResult";
import QUIZ_DATA from "../../data/QUIZ_DATA";
import resultHOC from "../../HOC/resultHOC";

const Result: React.FC = resultHOC(
  ({ correctAnswers, wrongAnswers, amountOfCorrectAnswers, firstName, lastName }) => {
    return (
      <Box>
        <div className=" w-full flex items-start flex-col gap-4">
          <div className=" w-full flex items-center flex-col gap-2">
            <h2 className=" text-3xl text-blue-500 font-black">
              Dear {firstName} {lastName}
            </h2>
            <p className=" text-lg text-blue-400 font-semibold">You have got this result</p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <p className=" text-2xl text-green-600 font-semibold">Correct answers:</p>
            <p
              className={` text-2xl font-semibold ${
                amountOfCorrectAnswers < 5
                  ? "text-red-600"
                  : amountOfCorrectAnswers >= 5
                  ? "text-orange-600"
                  : amountOfCorrectAnswers >= 9
                  ? "text-green-600"
                  : ""
              }`}
            >
              {amountOfCorrectAnswers} / {QUIZ_DATA?.length}
            </p>
          </div>
          <div className=" flex items-start flex-col gap-2">
            {correctAnswers?.map(correct => {
              return <ShowResult key={correct?.id} {...correct} />;
            })}
          </div>
        </div>
        {wrongAnswers?.length ? (
          <div className=" w-full flex items-start flex-col gap-4">
            <div>
              <p className=" text-2xl text-red-600 font-semibold">Incorrect answers:</p>
            </div>
            <div className=" flex items-start flex-col gap-2">
              {wrongAnswers?.map(wrong => {
                return <ShowResult key={wrong?.id} {...wrong} />;
              })}
            </div>
          </div>
        ) : null}
      </Box>
    );
  }
);

export default Result;
