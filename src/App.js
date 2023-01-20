import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { useState } from 'react';
import { addTodo, deleteTodo, removeAllTodo } from './action';


function App() {
  const [todoValue, setTodovalue] = useState('');
  const dispatch = useDispatch()
  const list = useSelector((state) => state.todoReducer.list)
  return (

    <div className="App">
      This is TO DO List
      <div>
        {/* form  */}
        <input type="text" value={todoValue} onChange={(e) => setTodovalue(e.target.value)} />
        <button onClick={() => dispatch(addTodo(todoValue))} >  add</button>
      </div>

      <div>
        {list.map((value, key) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>{value.data}</div>
              <button onClick={() => dispatch(deleteTodo(value.id))}>delete</button>
            </div>
          )
        })}
      </div>


      <button onClick={() => dispatch(removeAllTodo())}>Clear All</button>
    </div>
  );
}

export default App;
