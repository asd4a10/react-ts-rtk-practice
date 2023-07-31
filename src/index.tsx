import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import UsersPage from "./views/UsersPage";
import TodosPage from "./views/TodosPage";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    {/*<RouterProvider router={router} />*/}
    <App />
  </Provider>
);
