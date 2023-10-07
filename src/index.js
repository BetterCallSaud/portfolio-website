import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Landing } from "./components/Landing";
import NewLanding from "./components/NewLanding";
import { Library } from "./components/Library";

const resumePath = process.env.PUBLIC_URL + '/resume.pdf';

function ResumeLoader() {
  window.location.href = resumePath;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewLanding />
  },
  {
    path: "/library",
    element: <Library />
  },
  {
    path: "/resume",
    element: <ResumeLoader />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
