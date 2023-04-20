import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { LightTheme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};
