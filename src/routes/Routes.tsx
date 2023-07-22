import React, { lazy } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

const Main = lazy(() => import("../pages/main/Main"));
const Quiz = lazy(() => import("../pages/quiz/Quiz"));
const Result = lazy(() => import("../pages/result/Result"));
const Layouts = lazy(() => import("../layouts/Layouts"));

const Routes: React.FC = () => {
  const browserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layouts />}>
        <Route index element={<Main />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Route>
    )
  );

  return <RouterProvider router={browserRouter} />;
};

export default Routes;
