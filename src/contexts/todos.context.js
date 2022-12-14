
// toods and all methods that interact with todods
import React, { createContext } from "react";
import useTodoState from '../hooks/useTodoState'

const defaultTodos = [
  { id: 1, task: "mow the lawn", completed: false },
  { id: 2, task: "wash the cat", completed: true },
];

export const TodosContext = createContext() 

export function TodosProvider(props){

  const TodoStuff = useTodoState(defaultTodos)

  return(
    <TodosContext.Provider value={TodoStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}