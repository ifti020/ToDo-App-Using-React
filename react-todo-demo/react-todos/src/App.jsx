import { useState } from 'react'
import {TodoRowItem} from "./components/TodoRowItem";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const todos= [
      {rowNumber: 1, rowDescription: 'Feed Chicken', rowAssigned:"User 1"},
      {rowNumber: 1, rowDescription: 'Water Plants', rowAssigned:"User 2"},
      {rowNumber: 1, rowDescription: 'Make Dinner', rowAssigned:"User 3"},
    {rowNumber: 1, rowDescription: 'Practice Coding', rowAssigned:"User 4"}
  ]

  return (
      <div className='full-table'>
        <div>
          <div>
            Your Todo's
          </div>
          <div>
            <table>
              <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>Assigned</th>
              </tr>
              </thead>
              <tbody>

                <TodoRowItem todo={todos[0]}/>
                <TodoRowItem todo={todos[1]}/>
                <TodoRowItem todo={todos[2]}/>
                <TodoRowItem todo={todos[3]}/>


              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default App
