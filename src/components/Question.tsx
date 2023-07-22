import React, { ReactNode } from "react";

interface QuestionProps {
  children: ReactNode;
}

const Question: React.FC<QuestionProps> = ({ children }) => {
  return <pre className=" w-full font-[Quicksand] whitespace-pre-line">{children}</pre>;
};

export default Question;
