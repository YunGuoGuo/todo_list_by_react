import { createStore } from 'redux'

// 数据本地化逻辑
const saveDataToLocal = (data) => {
    sessionStorage.setItem("react_todo_list_data", JSON.stringify(data))
}

// 初始化数据
const localTodo = JSON.parse(sessionStorage.getItem("react_todo_list_data")) || []

const reducer = (state = {
    todo: localTodo,
}, action) => {
    switch (action.type){
        case "CREATE_TODO": {
            const newTodo = [action.data, ...state.todo]
            saveDataToLocal(newTodo)
            return {
                todo: newTodo
            }
        }
        case "DELETE_TODO": {
            const deleteId = action.id
            let newTodo = state.todo.filter(item => {
                return item.id !== deleteId
            })
            saveDataToLocal(newTodo)
            return {
                todo: newTodo
            }
        }
        case "SELECT_TODO": {
            const selectId = action.id
            let newTodo = state.todo.map(item => {
                if (item.id === selectId){
                    item.isSelected = !item.isSelected
                    item.isComplated = !item.isComplated
                }
                return item
            })
            saveDataToLocal(newTodo)
            return {
                todo: newTodo
            }
        }
        case "EDIT_TODO": {
            const editId = action.id
            let newTodo = state.todo.map(item => {
                if (item.id === editId){
                    item.isEditing = true
                }
                return item
            })
            saveDataToLocal(newTodo)
            return {
                todo: newTodo
            }
        }
        case "RENAME_TODO": {
            const renameId = action.id
            const newName = action.name
            let newTodo = state.todo.map(item => {
                if (item.id === renameId){
                    item.name = newName
                    item.isEditing = false
                }
                return item
            })
            saveDataToLocal(newTodo)
            return {
                todo: newTodo
            }
        }
        case "MULTIDELETE_TODO": {
            let newTodo = state.todo.filter(item => {
                return item.isComplated === false
            })
            saveDataToLocal(newTodo)
            return {
                todo: newTodo
            }
        }
        default:
            break;
    }
    return state
}

const store = createStore(reducer)
export default store