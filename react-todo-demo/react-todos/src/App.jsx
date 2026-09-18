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
          <NewTodoForm addTodo={addTodo}></NewTodoForm>
      </div>
  )
}

export default App
