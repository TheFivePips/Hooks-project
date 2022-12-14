import React, {useContext} from 'react';
import { ListItemText, ListItem, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {ListItemSecondaryAction} from '@mui/material';
import useToggle from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { TodosContext } from './contexts/todos.context';

const Todo = ({task, completed, id}) => {

  const [isEditing, toggle] = useToggle(false)
  const {removetodo, toggleTodo} = useContext(TodosContext)

    return (
      <ListItem style={{height: '64px'}}>
        {isEditing ? <EditTodoForm  id={id} task={task} toggleEditForm={toggle}/> : 
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
