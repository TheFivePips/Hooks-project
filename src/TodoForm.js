import { Paper, TextField } from '@mui/material';
import React, {useContext} from 'react';
import { TodosContext } from './contexts/todos.context';
import useInputState from './hooks/useInputState';


const TodoForm = () => {
    const [value, handleChange, reset] = useInputState('')

    const {addtodo} = useContext(TodosContext)
    
    return (
      <Paper style={{margin: "1rem 0", padding: "1rem 0"}}>
        <form onSubmit={(e) => {
            e.preventDefault()
            addtodo(value)
            reset()
        }}
        style={{
          display: 'flex', justifyContent: 'center'
        }}>
          <TextField
            value={value}
            onChange={handleChange} 
            label='Add New Todo'
            style={{
              margin: '0 1rem',
              width: '90%',
              padding: '0',
            }}
          />
        </form>
      </Paper>
    );
}

export default TodoForm;
