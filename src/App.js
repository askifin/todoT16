import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);
  

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const del = (event) => {
    console.log(todos);
    console.log(event.target.value);
    const newTodos = todos.filter((todo, i) => i != event.target.value);      //tuo !== ei toimi halutulla tavalla (?)
    setTodos(newTodos);
    console.log(todos);
  }

  return (
    <div className="App">
      <h1>T16</h1>
      <form onSubmit={addTodo}>
        <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
        <input type="submit" value="Add"/>
      </form>
      <table>
            <tbody>
            {
                todos.map((todo, index) => 
               
                    <tr key={index}>
                    <td>{todo.desc}</td>
                    <td>{todo.date}</td>
                    <button onClick={del} value={index}>Delete</button>
                    </tr>
                )
            }
            </tbody>
        </table>
    </div>
  );
}

export default App;

// open vinkki: todos.filter((todo, i) => i !== index)