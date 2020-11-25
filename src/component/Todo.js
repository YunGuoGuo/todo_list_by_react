import React from 'react';
import TodoTitle from './TodoTitle'
import TodoContent from './TodoContent'

const Todo = () => {
    return (
        <div id="todoapp">
            <TodoTitle></TodoTitle>
            <TodoContent></TodoContent>
        </div>
    );
}

export default Todo;