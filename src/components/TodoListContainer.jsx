import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/modules/todos";
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom';



const TodoListContainer = () => {
    const dispatch = useDispatch()
    const {todos} = useSelector((state) => state.todos);
    return (
        <ListContainer>
            <h1>Woking</h1>
            <StTodos>

                {todos.map((todo) => {
                        if (!todo.isDone)
                            return <StTodo key={todo.id}>
                                {todo.title}<br/>
                                {todo.content}
                                <DeleteButton
                                    onClick={() => {
                                        dispatch(deleteTodo(todo.id))
                                    }}> 삭제하기
                                </DeleteButton>
                                <DeleteButton
                                    onClick={() => {
                                        dispatch(toggleTodo(todo.id))
                                    }}> 완료하기
                                </DeleteButton>
                                <Link to={`/${todo.id}`}>
                                    <span>보기</span>
                                </Link>
                            </StTodo>
                    }
                )}
            </StTodos>
            <h1>Done</h1>
            <StTodos>

                {todos.map((todo) => {
                        if (todo.isDone)
                            return <StTodo key={todo.id}>
                                {todo.title}<br/>
                                {todo.content}
                                <DeleteButton
                                    onClick={() => {
                                        dispatch(deleteTodo(todo.id))
                                    }}> 삭제하기
                                </DeleteButton>
                                <DeleteButton
                                    onClick={() => {
                                        dispatch(toggleTodo(todo.id))
                                    }}> 취소하기
                                </DeleteButton>
                                <Link to={`/${todo.id}`}>
                                    <span>보기</span>
                                </Link>
                            </StTodo>
                    }
                )}


            </StTodos>
        </ListContainer>
    );
};

export default TodoListContainer;

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
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  border-radius: 12px;
`;

const DeleteButton = styled.button`
  border: 1px solid #ddd;
  height: 20px
`
