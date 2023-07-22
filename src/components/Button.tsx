import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, isDisabled, onClick }) => {
  return (
    <button
      className={` px-6 py-1 ${
        isDisabled ? "bg-gray-400" : "bg-blue-500"
      } text-white rounded-sm font-semibold transition-all`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
