import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
  toggleDisplay,
} from "../redux/modules/todos";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TodoPage from "./TodoPage";

const TodoListContainer = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [display, setDisplay] = useState(true);
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const onSubmitHandler = (id) => {
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    dispatch(
      updateTodo({
        id: id,
        title: title,
        content: content,
      })
    );

    setTitle("");
    setContent("");
    dispatch(toggleDisplay(id));
  };

  return (
    <ListContainer>
      <h1>Woking</h1>

      <StTodos>
        {todos.map(
          (todo) =>
            !todo.isDone && (
              <StTodo key={todo.id}>
                {todo.displaytoggle ? (
                  <ContentsContainer>
                    {todo.title}
                    <br />
                    {todo.content}
                  </ContentsContainer>
                ) : (
                  <UpdateContainer>
                    <StInput
                      className="title"
                      type="text"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <StInput
                      className="contents"
                      type="text"
                      value={content}
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                    />
                    <CusttomButton
                      onClick={() => {
                        onSubmitHandler(todo.id);
                      }}
                    >
                      완료
                    </CusttomButton>
                  </UpdateContainer>
                )}
                <CusttomButton
                  onClick={() => {
                    dispatch(deleteTodo(todo.id));
                  }}
                >
                  삭제하기
                </CusttomButton>
                <CusttomButton
                  onClick={() => {
                    dispatch(toggleTodo(todo.id));
                  }}
                >
                  완료하기
                </CusttomButton>
                <CusttomButton
                  onClick={() => {
                    dispatch(toggleDisplay(todo.id));
                  }}
                >
                  수정하기
                </CusttomButton>
                <Link to={`/${todo.id}`}>
                  <span>보기</span>
                </Link>
              </StTodo>
            )
        )}
      </StTodos>

      <h1>Done</h1>

      <StTodos>
        {todos.map(
          (todo) =>
            todo.isDone && (
              <StTodo key={todo.id}>
                {todo.displaytoggle ? (
                  <ContentsContainer>
                    {todo.title}
                    <br />
                    {todo.content}
                  </ContentsContainer>
                ) : (
                  <UpdateContainer>
                    <StInput
                      className="title"
                      type="text"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <StInput
                      className="contents"
                      type="text"
                      value={content}
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                    />
                    <CusttomButton
                      onClick={() => {
                        onSubmitHandler(todo.id);
                      }}
                    >
                      완료
                    </CusttomButton>
                  </UpdateContainer>
                )}
                <CusttomButton
                  onClick={() => {
                    dispatch(deleteTodo(todo.id));
                  }}
                >
                  삭제하기
                </CusttomButton>
                <CusttomButton
                  onClick={() => {
                    dispatch(toggleTodo(todo.id));
                  }}
                >
                  취소하기
                </CusttomButton>
                <CusttomButton
                  onClick={() => {
                    dispatch(toggleDisplay(todo.id));
                  }}
                >
                  수정하기
                </CusttomButton>
                <Link to={`/${todo.id}`}>
                  <span>보기</span>
                </Link>
              </StTodo>
            )
        )}
      </StTodos>
    </ListContainer>
  );
};

export default TodoListContainer;

const ContentsContainer = styled.div`
  display: ${(props) => props.Display};
`;

const UpdateContainer = styled.div`
  display: ${(props) => props.Display};
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  flex-direction: row;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 20%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 10px 24px;
`;

const CusttomButton = styled.button`
  border: 1px solid #ddd;
  height: 20px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;
