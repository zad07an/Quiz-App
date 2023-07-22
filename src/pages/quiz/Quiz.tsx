import React from "react";
import QUIZ_DATA from "../../data/QUIZ_DATA";
import Box from "../../components/Box";
import Button from "../../components/Button";
import AnswerBox from "../../components/AnswerBox";
import Question from "../../components/Question";
import quizHOC from "../../HOC/quizHOC";

const Quiz: React.FC = quizHOC(
  ({ isLatestQuestion, isDisabled, currentStep, handleNextQuestions }) => {
    return (
      <Box>
        <div className=" w-full">
          <Question>
            {currentStep + 1}. {QUIZ_DATA[currentStep]?.question}
          </Question>
          <div className=" w-full grid xs:grid-cols-2 gap-4 mt-4">
            <AnswerBox item={QUIZ_DATA[currentStep]} />
          </div>
        </div>
        <div className=" w-full flex items-center justify-end">
          <Button isDisabled={isDisabled} onClick={handleNextQuestions}>
            {isLatestQuestion ? "Ավարտել" : "Հաջորդը"}
          </Button>
        </div>
      </Box>
    );
  }
);

export default Quiz;
