import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todos: [],
  newTodoData: "dsf",
};

const homeReducer = createSlice({
  name: "homeReducer",
  initialState: INITIAL_STATE,
  reducers: {
    todoList: (state, action) => {
      state.todos = action.payload;
      return state;
    },

    newTodo: (state, action) => {
      state.newTodoData = action.payload;
      return state;
    },
  },
});

export default homeReducer.reducer;
export const { todoList, newTodo } = homeReducer.actions;
