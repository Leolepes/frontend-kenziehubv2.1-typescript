import { createBrowserRouter } from "react-router-dom";
import * as P from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <P.PageLogin />,
  },
  {
    path: "/login",
    element: <P.PageLogin />,
  },
  {
    path: "/register",
    element: <P.PageRegister />,
  },
  {
    path: "/dashboard",
    element: <P.PageDashboard />,
  },
]);
