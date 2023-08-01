import React from "react";
import PostContainer from "./components/post/PostContainer";
import Card, { CardVariant } from "./components/shared/Card";
import { userAPI } from "./services/UserService";
import List from "./components/shared/List";
import TodoItem from "./components/todo/TodoItem";
import EventsExample from "./components/events/EventsExample";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import UsersPage from "./views/UsersPage";
import TodosPage from "./views/TodosPage";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );
  //
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>COMPANY</h1>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/users"}>Users</NavLink>
          <NavLink to={"/todos"}>Todos</NavLink>
        </nav>
        {/*<ul>*/}
        {/*  <li>*/}
        {/*    */}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link to={"/users"}>Users</Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link to={"/todos"}>Todos</Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}
        {/*<hr />*/}
      </header>
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={"about"} element={<AboutPage />} />
          <Route path={"todos"} element={<UsersPage />} />
          <Route path={"users"} element={<TodosPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
