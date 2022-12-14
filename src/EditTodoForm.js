import React, {useContext} from 'react';
import useInputState from './hooks/useInputState';
import { TextField } from '@mui/material';
import { DispatchContext } from './contexts/todos.context';

const EditTodoForm = ({id, task, toggleEditForm}) => {


  const [value, handleChange, reset] = useInputState(task)
  const dispatch = useContext(DispatchContext)

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      dispatch({type: "EDIT", id: id, newTask: value})
      reset()
      toggleEditForm()
    }}
    style={{
      marginLeft:'1rem',
      width: '80%',
      height: ''
    }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
