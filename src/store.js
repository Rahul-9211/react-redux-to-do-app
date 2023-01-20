import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducer/reducer"


const reducer = combineReducers({
    // all the reducer will be here 
})

// const initialState = {}

// const middleWare = [thunk]
const store = createStore(
    rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true, // (action) => { return ‘trace as string’; }
        traceLimit: 25,
    })
)

export default store;