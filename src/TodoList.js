import React from 'react';
import { Paper, List} from '@mui/material';
import Todo from './Todo';
import Divider from "@mui/material/Divider";
const TodoList = ({todos, removetodo, toggleTodo, editTodo}) => {
    
    if(todos.length)
    return (
      <Paper>
        <List>
            {todos.map((todo,i) => (
              <>
                <Todo
                  task={todo.task} 
                  completed={todo.completed}
                  id={todo.id} 
                  removetodo={removetodo}
                  toggleTodo={toggleTodo}
                  editTodo={editTodo}
                />
                {i < todos.length -1 && <Divider />}
              </>
                
            ))}
      </List>
    </Paper>
  );
  return null
}

export default TodoList;
