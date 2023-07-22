import { Outlet } from "react-router-dom";
import useRedirect from "../hooks/useRedirect";

const Layouts = () => {
  useRedirect();
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layouts;
