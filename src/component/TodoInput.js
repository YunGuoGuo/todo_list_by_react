import React from 'react';
import { useDispatch } from 'react-redux';

const CreateTodo = () => {
    const dispatch = useDispatch()

    function createNewTodo(e){
        if (e.key === "Enter" && e.target.value !== ""){
            const name = e.target.value
            const id = +new Date()
            dispatch({
                type: "CREATE_TODO",
                data: {
                    id,
                    name,
                    isComplated: false,
                    isSelected: false,
                    isEditing: false
                }
            })
            e.target.value = ""
        }
        return
    }

    return (
        <div id="create-todo">
            <input id="new-todo" placeholder="What needs to be done?" autoComplete="off" type="text" onKeyDown={createNewTodo}/>
        </div>
    );
}

export default CreateTodo;