import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

const TodoList = (props) => {
    const { data } = props
    const dispatch = useDispatch()
    const editElement = useRef()

    // 删除单个todo逻辑
    const deleteTodoList = () => {
        dispatch({
            type: "DELETE_TODO",
            id: data.id
        })
    }
    // 点击复选框逻辑
    const selectTodoList = (e) => {
        dispatch({
            type: "SELECT_TODO",
            id: data.id
        })
    }
    // 双击todo逻辑
    const doubleClick = () => {
        dispatch({
            type: "EDIT_TODO",
            id: data.id
        })

    }
    // 编辑状态中失去焦点逻辑
    const onBlur = (e) => {
        const newName = e.target.value
        if (newName === ""){
            return
        }
        dispatch({
            type: "RENAME_TODO",
            name: newName,
            id: data.id
        })
    }
    // 编辑时按下Enter逻辑
    const enterInEditing = (e) => {
        if (e.key === "Enter"){
            onBlur(e)
        }
    }
    // 组件加载或更新的时候触发逻辑
    useEffect(() => {
        if (data.isEditing){
            editElement.current.select()
        }
    });
    return (
        <li className={data.isEditing?"editing":""}>
            <div className={"todo " + (data.isComplated?"done":"")}>
                <div className="display">
                    <input className="check" type="checkbox" onChange={selectTodoList} checked={data.isSelected}/>
                    <div className="todo-content" onDoubleClick={doubleClick}>{data.name}</div>
                    <span className="todo-destroy" onClick={deleteTodoList}></span>
                </div>
                <div className="edit">
                    <input ref={editElement} className="todo-input" type="text" defaultValue={data.name} onBlur={onBlur} onKeyDown={enterInEditing}/>
                </div>
            </div>
        </li>
    );
}

export default TodoList;