
import { v4 as uuidv4 } from "uuid";


const reducer = (state, action) => {
    switch(action.type){
        case "ADD":
            return [...state, { id: uuidv4(), task: action.task, completed: false }];
        case "REMOVE":
            return state.filter((t) => t.id !== action.id);
        case "TOGGLE":
            return state.map((t) =>
                t.id === action.id ? { ...t, completed: !t.completed } : t
            );
        case "EDIT":
            return state.map((t) =>
                t.id === action.id ? { ...t, task: action.newTask } : t
            )  
        default:
            return state
    }   
}

export default reducer

// const addtodo = (newTodoText) => {
//   setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
// };

// const removetodo = (todoId) => {
//   setTodos(todos.filter((t) => t.id !== todoId));
// };

// const toggleTodo = (todoId) => {
//   const updatedTodos = todos.map((t) =>
//     t.id === todoId ? { ...t, completed: !t.completed } : t
//   );
//   setTodos(updatedTodos);
// };

// const editTodo = (todoId, newTask) => {
//   const updatedTodos = todos.map((t) =>
//     t.id === todoId ? { ...t, task: newTask } : t
//   );
//   setTodos(updatedTodos);
// };