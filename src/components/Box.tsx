import React, { ReactNode } from "react";

interface QuizBoxProps {
  children: ReactNode;
}

const Box: React.FC<QuizBoxProps> = ({ children }) => {
  return (
    <div className=" relative w-full h-full lg:w-1/2 sm:w-10/12 sm:h-fit p-4 flex items-start flex-col justify-between gap-4 bg-white rounded-lg overflow-hidden shadow-md">
      {children}
    </div>
  );
};

export default Box;
