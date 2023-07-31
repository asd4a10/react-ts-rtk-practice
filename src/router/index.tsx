import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UsersPage from "../views/UsersPage";
import TodosPage from "../views/TodosPage";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/todos",
    element: <TodosPage />,
  },
]);
