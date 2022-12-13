import React from 'react';
import { ListItemText, ListItem, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {ListItemSecondaryAction} from '@mui/material';

const Todo = ({task, completed, id, removetodo, toggleTodo}) => {
    return (
      <ListItem>
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
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
    
}

export default Todo;
