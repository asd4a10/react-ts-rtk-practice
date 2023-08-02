import { createBrowserRouter } from "react-router-dom";

// pages
import UsersPage from "../views/UsersPage";
import TodosPage from "../views/TodosPage";
import HomePage from "../views/HomePage";
import AboutPage from "../views/AboutPage";

// layout
import RootLayout from "../layouts/RootLayout";
import HelpLayout from "../layouts/HelpLayout";
import ContactPage from "../views/help/ContactPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "todos",
        element: <TodosPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          {
            path: "faq",
            element: <div>faq page</div>,
          },
          {
            path: "contact",
            element: <ContactPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
