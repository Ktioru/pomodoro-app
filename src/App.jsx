import { useState } from 'react'

import './App.scss'

import './counter'
import Counter from './counter'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div className='app'>
      <header>
        <h1>Pomodoro Timer</h1>
      </header>
      <main>
        <Counter time={25} name={"Work"}/>
        <Counter time={5} name={"Rest"}/>
        
      </main>
      <footer>
        <h1>Made by Ktioru</h1>
      </footer>
    </div>
  )
}

export default App
