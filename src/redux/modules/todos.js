// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const toggleTodo = (payload) => {
  return { type: TOGGLE_TODO, payload };
};

// initial State
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

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todos) => todos.id !== action.payload),
      };
    case TOGGLE_TODO:
      let Todolist = state.todos.slice();
      Todolist.find((e) => e.id === action.payload).isDone = !Todolist.find(
        (e) => e.id === action.payload
      ).isDone;

      return {
        todos: Todolist,
      };

    default:
      return state;
  }
};

export default todos;
