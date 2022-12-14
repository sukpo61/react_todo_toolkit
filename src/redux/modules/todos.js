import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "제목1",
      content: "내용1",
      isDone: false,
      displaytoggle: true,
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
      isDone: false,
      displaytoggle: true,
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todos) => todos.id !== action.payload);
    },

    toggleTodo: (state, action) => {
      let Todolist = state.todos.slice();
      Todolist.find((e) => e.id === action.payload).isDone = !Todolist.find(
        (e) => e.id === action.payload
      ).isDone;
      state.todos = Todolist;
    },
    toggleDisplay: (state, action) => {
      let Todolist = state.todos.slice();
      Todolist.find((e) => e.id === action.payload).displaytoggle =
        !Todolist.find((e) => e.id === action.payload).displaytoggle;
      state.todos = Todolist;
    },
    updateTodo: (state, action) => {
      let Todolist = state.todos.slice();
      Todolist.find((e) => e.id === action.payload.id).title =
        action.payload.title;
      Todolist.find((e) => e.id === action.payload.id).content =
        action.payload.content;
      state.todos = Todolist;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, updateTodo, toggleDisplay } =
  todosSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todosSlice.reducer;
