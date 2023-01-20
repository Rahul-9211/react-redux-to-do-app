// it holds cuurent state and return action 

const initialState = {
    list: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add_todo":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list, {
                        id: id,
                        data: data
                    }
                ]
            }

        case "delete_todo":
            const newList = state.list.filter((elem) => elem.id != action.payload.id)
            return {
                ...state,
                list: newList
            }

        case "removeAll_todo":
            const emptyList = []
            return {
                ...state,
                list: emptyList
            }
        default:
            return state;
    }
}
export default todoReducer