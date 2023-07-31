import React, { FC } from "react";
import { ITodo } from "../../models/ITodo";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      {todo.id}. {todo.title} <input type="checkbox" checked={todo.completed} />
    </div>
  );
};

export default TodoItem;
