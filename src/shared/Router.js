import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoListContainer from "../components/TodoListContainer";
import styled from "styled-components";
import AddForm from "../components/AddForm";
import TodoPage from "../components/TodoPage";


const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;


const Router = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={
                    <StContainer>
                        <AddForm/>
                        <TodoListContainer/>
                    </StContainer>
                }/>
                <Route path="/:id" element={<TodoPage/>}/>
            </Routes>

        </BrowserRouter>
    );
};

export default Router;