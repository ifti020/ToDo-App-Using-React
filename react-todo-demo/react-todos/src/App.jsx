import { useState } from 'react'
import './App.css'
import {NewTodoForm} from "./components/NewTodoForm"
import {ToDoTable} from "./components/ToDoTable.jsx";


function App() {
  const [count, setCount] = useState(0)

  const initialTodos= [
      {rowNumber: 1, rowDescription: 'Feed Chicken', rowAssigned:"User 1"},
      {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned:"User 2"},
      {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned:"User 3"},
      {rowNumber: 4, rowDescription: 'Practice Coding', rowAssigned:"User 4"},
      {rowNumber: 5, rowDescription: 'Clean Room', rowAssigned:"User 5"}
  ]

    const [todos, setTodos] = useState(initialTodos)

        const addTodo = () => {
      const newTodo = {
          rowNumber: 10,
          rowDescription: 'new Todo',
                rowAssigned:"User 3",
            }
           setTodos([...todos,newTodo])
            console.log(todos)
        }
  return (
      <div className='full-table'>
        <div>
          <div>
            Your Todo's
          </div>
          <div>

            <ToDoTable todos={todos}></ToDoTable>
            <button onClick={addTodo}>Click Me!</button>
          </div>
        </div>
          <NewTodoForm></NewTodoForm>
      </div>
  )
}

export default App
