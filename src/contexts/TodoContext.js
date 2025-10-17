import { createContext, useContext } from "react";

// Create context
export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

// Hook for easier access
export const useTodo = () => useContext(TodoContext);

// Provider wrapper
export const TodoProvider = TodoContext.Provider;
