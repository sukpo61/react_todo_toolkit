import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  __deleteTodo,
  __updateTodo,
  toggleDisplay,
} from "../redux/modules/todos";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TodosBox = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (todo) => {
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    console.log(todo);
    let NewTodo = {
      ...todo,
      title: title,
      content: content,
      displaytoggle: true,
    };

    console.log(NewTodo);

    dispatch(__updateTodo(NewTodo));

    setTitle("");
    setContent("");
    const udBtns = document.querySelectorAll(".editButton");
    udBtns.forEach((udBtn) => (udBtn.disabled = false));
  };
  return (
    <div>
      <h1> {props.Bool ? "Done" : "Working"}</h1>
      <StTodos>
        {todos.map(
          (todo) =>
            todo.isDone === props.Bool && (
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
                        onSubmitHandler(todo);
                      }}
                    >
                      완료
                    </CusttomButton>
                  </UpdateContainer>
                )}
                <CusttomButton
                  onClick={() => {
                    dispatch(__deleteTodo(todo.id));
                  }}
                >
                  삭제하기
                </CusttomButton>
                <CusttomButton
                  onClick={() => {
                    let NewTodo = {
                      ...todo,
                      isDone: !todo.isDone,
                    };

                    dispatch(__updateTodo(NewTodo));
                  }}
                >
                  {props.Bool ? "취소하기" : "완료하기"}
                </CusttomButton>
                <CusttomButton
                  className="editButton"
                  onClick={() => {
                    const udBtns = document.querySelectorAll(".editButton");
                    udBtns.forEach((udBtn) => (udBtn.disabled = true));
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
    </div>
  );
};

const ContentsContainer = styled.div`
  display: ${(props) => props.Display};
`;

const UpdateContainer = styled.div`
  display: ${(props) => props.Display};
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

export default TodosBox;
