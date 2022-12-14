import React from "react";
import styled from "styled-components";
import TodosBox from "./TodosBox";

const TodoListContainer = () => {
  return (
    <ListContainer>

      <TodosBox Bool={false}></TodosBox>

      <TodosBox Bool={true}></TodosBox>
      
    </ListContainer>
  );
};

export default TodoListContainer;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
