import { useState } from 'react'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div className='app'>
      <header>
        <h1>Pomodoro Timer</h1>
      </header>
      <main>Content</main>
      <footer>
        <h1>Made by Ktioru</h1>
      </footer>
    </div>
  )
}

export default App
