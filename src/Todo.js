import React from 'react';
import { ListItemText, ListItem, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {ListItemSecondaryAction} from '@mui/material';
import useToggle from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

const Todo = ({task, completed, id, removetodo, toggleTodo, editTodo}) => {
  const [isEditing, toggle] = useToggle(false)

    return (
      <ListItem style={{height: '64px'}}>
        {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/> : 
        <>
          <Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)}/>
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="delete" onClick={() => removetodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
        }
        
      </ListItem>
    );
    
}

export default Todo;
