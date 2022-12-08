import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const TodoPage = () => {
  const { todos } = useSelector((state) => state.todos);
  const param = useParams();
  const todo = todos.find((todo) => todo.id === parseInt(param.id));
  return (
    <TodoBox>
      <div>{todo.title}</div>
      <div>{todo.content}</div>
      <Link to={`/`}>
        <span>돌아가기</span>
      </Link>
    </TodoBox>
  );
};

const TodoBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

export default TodoPage;
