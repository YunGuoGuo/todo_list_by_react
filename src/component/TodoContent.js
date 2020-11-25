import React from 'react';
import TodoInput from './TodoInput'
import TodoLists from "./TodoLists"
import TodoFooter from "./TodoFooter"

const TodoContent = () => {
    return (
        <ul id="todo-list">
            <TodoInput></TodoInput>
            <TodoLists></TodoLists>
            <TodoFooter></TodoFooter>
        </ul>
    );
}

export default TodoContent;