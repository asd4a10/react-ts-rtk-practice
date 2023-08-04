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
import NotFoundPage from "../views/NotFoundPage";
import CareersPage from "../modules/careers/views/CareersPage";
import VacancyDetails from "../modules/careers/components/VacancyDetails";
import CareersLayout from "../layouts/CareersLayout";

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
        path: "careers",
        element: <CareersLayout />,
        children: [
          {
            path: "",
            element: <CareersPage />,
          },
          {
            path: ":id",
            element: <VacancyDetails />,
          },
        ],
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
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
