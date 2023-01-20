// it contain all the action will be performed 
export const addTodo = (data) => {
    return {
        type: "add_todo",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type: "delete_todo",
        payload: {
            id
        }
    }
}
export const removeAllTodo = () => {
    return {
        type: "removeAll_todo"
    }
}