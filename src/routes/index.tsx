import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Home</h1>
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <h1>Login</h1>
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <h1>Register</h1>
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <h1>Dashboard</h1>
      </div>
    ),
  },
]);
