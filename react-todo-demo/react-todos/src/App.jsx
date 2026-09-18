import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
              <tr>
                <td>1</td>
                <td>Feed Chicken</td>
                <td>Ifti Haque</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Get HairCut</td>
                <td>Ifti Haque</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Clean Desk</td>
                <td>Ifti Haque</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default App
