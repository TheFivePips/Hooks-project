
// toods and all methods that interact with todods
import React, { createContext, useReducer } from "react";
import reducer from "../reducers/todo.reducer";

const defaultTodos = [
  { id: 1, task: "mow the lawn", completed: false },
  { id: 2, task: "wash the cat", completed: true },
];

export const TodosContext = createContext() 

export function TodosProvider(props){

  // const TodoStuff = useTodoState(defaultTodos)
  const [todos, dispatch] = useReducer(reducer, defaultTodos)

  return(
    <TodosContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodosContext.Provider>
  )
}