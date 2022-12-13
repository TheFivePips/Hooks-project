import React, {useState} from 'react';
import { Typography, Paper, AppBar,Toolbar, Grid } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from "uuid";
const TodoApp = () => {
    const initialTodos = [
        {id:1 , task: "wash cat", completed: false},
        {id:2 , task: "kill", completed: false},
        {id:3 , task: "laundry", completed: true},
    ]
    const [todos, setTodos] = useState(initialTodos)

    const addtodo = newTodoText => {
        setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}])
    }

    const removetodo = todoId => {
        setTodos(todos.filter(t => t.id !== todoId))
    }

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(t => 
            t.id === todoId ? {...t, completed: !t.completed} : t
        )
        setTodos(updatedTodos)
    }

    return (
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa",
        }}
        elevation={0}
      >
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">TODOS WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent='center' style={{marginTop: '1rem'}}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addtodo={addtodo} />
            <TodoList todos={todos} removetodo={removetodo} toggleTodo={toggleTodo}/>
          </Grid>
        </Grid>
      </Paper>
    );
}

export default TodoApp;
