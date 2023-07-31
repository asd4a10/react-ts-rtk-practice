import React from "react";
import PostContainer from "./components/post/PostContainer";
import Card, { CardVariant } from "./components/shared/Card";
import { userAPI } from "./services/UserService";
import List from "./components/shared/List";
import TodoItem from "./components/todo/TodoItem";
import EventsExample from "./components/events/EventsExample";
import { BrowserRouter, Link, Router } from "react-router-dom";
import UsersPage from "./views/UsersPage";
import TodosPage from "./views/TodosPage";

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
    <div>
      {/*<Link to={"/"}>Home</Link>*/}
      {/*<Link to={"/users"}>Users</Link>*/}
      {/*<Link to={"/todos"}>Todos</Link>*/}
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/users"}>Users</Link>
            </li>
            <li>
              <Link to={"/todos"}>Todos</Link>
            </li>
          </ul>

          <hr />
        </div>
      </BrowserRouter>
    </div>
    // <BrowserRouter>
    //   <div className="App">
    //     <Route path={"/users"}>
    //       <UsersPage />
    //     </Route>
    //     <Route path={"/todos"}>
    //       <TodosPage />
    //     </Route>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
