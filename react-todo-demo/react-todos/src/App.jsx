import { useState } from 'react'
import './App.css'
import {NewTodoForm} from "./components/NewTodoForm"
import {ToDoTable} from "./components/ToDoTable.jsx";


function App() {
  const [count, setCount] = useState(0)

  const initialTodos= [
      {rowNumber: 1, rowDescription: 'Feed Chicken', rowAssigned:"Today"},
      {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned:"Tomorrow"},
      {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned:"By 5 PM"},
      {rowNumber: 4, rowDescription: 'Practice Coding', rowAssigned:"Next Week"},
      {rowNumber: 5, rowDescription: 'Clean Room', rowAssigned:"Sunday"}
  ]

    const [showForm, setShowForm] = useState(false)
    const [todos, setTodos] = useState(initialTodos)

        const addTodo = (assigned, description) => {
            let newRowNumber
            if(todos.length > 0)
            {
                newRowNumber = todos[todos.length -1].rowNumber +1;
            }
            else
            {
                newRowNumber = 1
            }

      const newTodo = {
                rowNumber: newRowNumber ,
                rowDescription: description,
                rowAssigned:assigned
            }
           setTodos([...todos,newTodo])

        }

    const deleteTodo = (deleteTodoRowNumber) =>{
        const filtered = todos.filter(todo=>todo.rowNumber !== deleteTodoRowNumber)
        setTodos(filtered)
    }



  return (
      <div className='full-table'>
        <div>
          <div>
            Your Todo's
          </div>
          <div>

            <ToDoTable todos={todos} deleteTodo={deleteTodo}></ToDoTable>
            <button onClick={()=> setShowForm(!showForm)}>
                {showForm ? 'Close Form': 'Add New Todo'}</button>
          </div>
        </div>
          {showForm && <NewTodoForm addTodo={addTodo}></NewTodoForm>}
      </div>
  )
}

export default App
