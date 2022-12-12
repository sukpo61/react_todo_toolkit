import { createSlice } from "@reduxjs/toolkit";

// // Action value
// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";
// const TOGGLE_TODO = "TOGGLE_TODO";

// // Action Creator
// export const addTodo = (payload) => {
//   return { type: ADD_TODO, payload };
// };

// export const deleteTodo = (payload) => {
//   return { type: DELETE_TODO, payload };
// };

// export const toggleTodo = (payload) => {
//   return { type: TOGGLE_TODO, payload };
// };

// initial State

// // Reducer
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };
//     case DELETE_TODO:
//       return {
//         todos: state.todos.filter((todos) => todos.id !== action.payload),
//       };
//     case TOGGLE_TODO:
//       let Todolist = state.todos.slice();
//       Todolist.find((e) => e.id === action.payload).isDone = !Todolist.find(
//         (e) => e.id === action.payload
//       ).isDone;

//       return {
//         todos: Todolist,
//       };

//     default:
//       return state;
//   }
// };

const initialState = {
  todos: [
    {
      id: 1,
      title: "제목1",
      content: "내용1",
      isDone: false,
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
      isDone: false,
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
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todosSlice.reducer;
