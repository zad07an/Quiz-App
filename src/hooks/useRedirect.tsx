import { useEffect } from "react";
import { useAppSelector } from "../redux/store/store";
import { useLocation, useNavigate } from "react-router-dom";

const useRedirect = () => {
  const { isLatestQuestion } = useAppSelector(state => state.quiz);
  const { userLogged } = useAppSelector(state => state.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (userLogged && !isLatestQuestion) {
      if (pathname === "/result") {
        navigate("/quiz");
      }
    }
    if (!userLogged) {
      if (pathname === "/quiz" || pathname === "/result") {
        navigate("/");
      }
    }
  }, [pathname, isLatestQuestion, userLogged]);
};

export default useRedirect;
