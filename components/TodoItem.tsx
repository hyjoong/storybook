import React from "react";
import styled from "styled-components";
import { TodoData } from "store/todo";
import useStore from "store/useStore";
import CheckBox from "../components/commons/CheckBox/CheckBox";

interface Props {
  data: TodoData;
}

const TodoItem = ({ data }: Props) => {
  const { todo } = useStore();

  const removeItem = () => {
    todo.removeTodo(data.id);
  };

  const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    todo.checkTodo(data.id);
  };

  return (
    <Root>
      <CheckBox labelText={data.content} />
      <span onClick={removeItem}>❌</span>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
`;

export default TodoItem;
