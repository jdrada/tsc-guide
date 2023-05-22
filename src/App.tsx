import Landing from "./containers/Landing";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tutorials from "./routes/Tutorials";
import Root from "./routes/root";
import Tutorial from "./containers/Tutorial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "/tutorials",
        children: [
          { index: true, element: <Tutorials /> },
          {
            path: ":tutorialId",
            element: <Tutorial />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
