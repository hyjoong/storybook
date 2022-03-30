import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import styled from "styled-components";
import BaseLayout from "components/BaseLayout/BaseLayout";

const Index = () => {
  return (
    <BaseLayout>
      <TodoForm />
      <TodoList />
    </BaseLayout>
  );
};

const Root = styled.div`
  width: 300px;
  min-height: 100px;
  margin: 30px auto 0;
`;

export default Index;
