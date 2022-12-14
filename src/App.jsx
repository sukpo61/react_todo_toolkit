import React, { useEffect } from "react";
import Router from "./shared/Router";
import { useDispatch, useSelector } from "react-redux";
import { __getTodo } from "./redux/modules/todos";

const App = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <Router />;
};

export default App;
