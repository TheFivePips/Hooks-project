import { Paper, TextField } from '@mui/material';
import React from 'react';
import useInputState from './hooks/useInputState';

const TodoForm = ({addtodo}) => {
    const [value, handleChange, reset] = useInputState('')
    return (
      <Paper style={{margin: "1rem 0", padding: "1rem 0"}}>
        <form onSubmit={(e) => {
            e.preventDefault()
            addtodo(value)
            reset()
        }}>
          <TextField value={value} onChange={handleChange} margin='normal' label='Add New Todo' fullWidth />
        </form>
      </Paper>
    );
}

export default TodoForm;
