import { useState } from 'react'
import './App.css'
import {ToDoTable} from "./components/ToDoTable.jsx";

function App() {
  const [count, setCount] = useState(0)

  const todos= [
      {rowNumber: 1, rowDescription: 'Feed Chicken', rowAssigned:"User 1"},
      {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned:"User 2"},
      {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned:"User 3"},
      {rowNumber: 4, rowDescription: 'Practice Coding', rowAssigned:"User 4"},
      {rowNumber: 5, rowDescription: 'Clean Room', rowAssigned:"User 5"}
  ]

  return (
      <div className='full-table'>
        <div>
          <div>
            Your Todo's
          </div>
          <div>

            <ToDoTable todos={todos}></ToDoTable>

          </div>
        </div>
      </div>
  )
}

export default App
