import Landing from "./containers/Landing";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tutorials from "./routes/Tutorials";
import Root from "./routes/root";
import Tutorial, { TutorialData } from "./containers/Tutorial";
import axios from "axios";

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
            element: <Tutorial />,
            path: ":tutorialId",
            loader: async ({ params }): Promise<TutorialData> => {
              const { data } = await axios.get(
                `http://localhost:1337/api/typescript-tutorials/${params.tutorialId}`
              );
              return data;
            },
            errorElement: <div>Error</div>,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
