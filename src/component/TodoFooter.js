import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TodoFooter = () => {
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()

    // 获取未完成todo的数量
    const getUncomplateCount = () => {
        let count = 0
        todo.forEach(item => {
            if (!item.isComplated){
                count++
            }
        })
        return count
    }
    // 获取已完成todo的数量
    const getComplateCount = () => {
        return todo.length - getUncomplateCount()
    }
    // 批量删除逻辑
    const multiDeleteTodo = () => {
        dispatch({
            type: "MULTIDELETE_TODO"
        })
    }
    return (
        <div id="todo-stats">
            <span className="todo-count">
                <span className="number">{getUncomplateCount()}</span>
                <span className="word">项待完成</span>
            </span>
            <span className="todo-clear">
                <a href={console.log()} onClick={multiDeleteTodo}>
                    Clear <span>{getComplateCount()}</span> 已完成事项
                </a>
            </span>
        </div>
    );
}

export default TodoFooter;