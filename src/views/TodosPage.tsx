import React, { FC } from "react";
import { userAPI } from "../services/UserService";
import List from "../components/shared/List";
import TodoItem from "../components/todo/TodoItem";

const TodosPage: FC = () => {
  const { data: todos } = userAPI.useFetchAllTodosQuery();

  return (
    <div>
      {todos && (
        <List
          items={todos}
          renderItem={(todo) => <TodoItem todo={todo} key={todo.id} />}
        />
      )}
    </div>
  );
};

export default TodosPage;
