import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/students",
        element: <Student></Student>,
      },
    ],
  },
]);
import App from "./App.jsx";
import Login from "./Login.jsx";
import Student from "./Student.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>,
);
