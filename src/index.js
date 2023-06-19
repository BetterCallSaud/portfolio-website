import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./components/Landing";
import { More } from "./components/More";
import { BookDemo } from "./components/BookDemo";
import { Library } from "./components/Library";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/more",
    element: <More />
  },
  {
    path: "/book-demo",
    element: <BookDemo />
  },
  {
    path: "/library",
    element: <Library />
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