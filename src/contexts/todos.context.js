
// toods and all methods that interact with todods
import React, { createContext } from "react";
import reducer from "../reducers/todo.reducer";
import { useLocalStoreageReducer } from "../hooks/useLocalStorageReducer";

const defaultTodos = [
  { id: 1, task: "mow the lawn", completed: false },
  { id: 2, task: "wash the cat", completed: true },
];

export const TodosContext = createContext() 
export const DispatchContext = createContext()

export function TodosProvider(props){

  const [todos, dispatch] = useLocalStoreageReducer('todos', defaultTodos, reducer)

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}