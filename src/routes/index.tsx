import { createBrowserRouter } from "react-router-dom";
import { PageLogin } from "../pages/pageLogin";
import { PageRegister } from "../pages/pageRegister";
import { PageDashboard } from "../pages/pageDashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
    <PageLogin/>
    ),
  },
  {
    path: "/login",
    element: (
    <PageLogin/>
    ),
  },
  {
    path: "/register",
    element: (
   <PageRegister/>
    ),
  },
  {
    path: "/dashboard",
    element: (
    <PageDashboard/>
    ),
  },
]);
