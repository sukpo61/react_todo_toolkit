import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom';

const TodoPage = () => {
    const {todos} = useSelector((state) => state.todos);
    const param = useParams();
    const todo = todos.find((todo) => todo.id === parseInt(param.id));
    return(
        <div>
            <div>{todo.title}</div>
            <div>{todo.content}</div>
            <Link to={`/`}>
                <span>돌아가기</span>
            </Link>
        </div>
    )
}

export default TodoPage