import React from "react";
import PostContainer from "./components/post/PostContainer";
import Card, { CardVariant } from "./components/shared/Card";
import { userAPI } from "./services/UserService";
import List from "./components/shared/List";
import TodoItem from "./components/todo/TodoItem";
import EventsExample from "./components/events/EventsExample";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import router from "./router";

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );
  //
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
