import "../init.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Mainpage from "./Components/Mainpage/Mainpage.jsx";
import Destinations from "./Components/Destinations/Destinations.jsx";
import DetailsPage from "./Components/DetailsPage/DetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Mainpage />,
      },
      {
        path: "destinations",
        element: <Destinations />,
      },
      {
        path: "details/:cityCode/:slug",
        element: <DetailsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
