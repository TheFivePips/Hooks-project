import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useTodoState(initialTodos) {
    const [todos, setTodos] = useState(initialTodos);

    const addtodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
    };

    const removetodo = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
    };

    const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((t) =>
        t.id === todoId ? { ...t, completed: !t.completed } : t
    );
    setTodos(updatedTodos);
    };

    const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((t) =>
        t.id === todoId ? { ...t, task: newTask } : t
    );
    setTodos(updatedTodos);
    };


    return {
        todos,
        addtodo: addtodo,
        removetodo: removetodo,
        toggleTodo: toggleTodo,
        editTodo: editTodo,
    };
} 


   

