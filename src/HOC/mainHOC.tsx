import React, { useId, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store/store";
import { getUser } from "../redux/features/user-slice";

interface MainComponentProps {
  id: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: { preventDefault: () => void }) => void;
}

const mainHOC = (Component: React.FC<MainComponentProps>) => {
  interface InputValueProps {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
  }

  const initialInputValue: InputValueProps = {
    firstName: null,
    lastName: null,
    email: null
  };

  return () => {
    const id = useId();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState<InputValueProps>(initialInputValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setInputValue(prevValue => ({ ...prevValue, [e.target.name]: value }));
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      const { firstName, lastName, email } = inputValue;
      if (firstName && lastName && email) {
        if (firstName.length > 3 && lastName.length > 3) {
          dispatch(getUser(inputValue));
          navigate("/quiz");
        }
      }
    };

    return <Component id={id} handleChange={handleChange} handleSubmit={handleSubmit} />;
  };
};

export default mainHOC;
