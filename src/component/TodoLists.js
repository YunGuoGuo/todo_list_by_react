import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import TodoList from './TodoList'

const TodoLists = () => {
    const todo = useSelector(state=>state.todo)

    return (
        <Fragment>
            { todo.map(item =>{
                return <TodoList key={item.id} data={item}></TodoList>
            })}
        </Fragment>
    );
}

export default TodoLists;