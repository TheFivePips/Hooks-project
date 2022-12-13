import React from 'react';
import { Paper, List} from '@mui/material';
import Todo from './Todo';
const TodoList = ({todos, removetodo, toggleTodo}) => {
    
    return (
      <Paper>
        <List>
            {todos.map((todo) => (
                <Todo
                    key={todo.id} 
                    task={todo.task} 
                    completed={todo.completed}
                    id={todo.id} 
                    removetodo={removetodo}
                    toggleTodo={toggleTodo}
                />
                ))}
            
        </List>
      </Paper>
    );
}

export default TodoList;
