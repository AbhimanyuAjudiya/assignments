import './App.css'
import { Todos } from './components/Todos'
import { CreateTodo } from './components/CreateTodo'
import { useEffect, useState } from 'react'

function App() {

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
  },[])

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} ></Todos>
    </div>
  )
}

export default App
