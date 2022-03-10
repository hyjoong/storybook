import React from "react";
import { useObserver } from "mobx-react";

import TodoItem from "./TodoItem";
import useStore from "store/useStore";

const TodoList = () => {
  const {
    todo: { todoData },
  } = useStore();

  return useObserver(() => (
    <section>
      {todoData.map((v) => (
        <TodoItem data={v} key={`todoData_${v.id}`} />
      ))}
    </section>
  ));
};

export default TodoList;
