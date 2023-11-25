import { useState } from 'react'

import './App.scss'

import Counter from './counter'

import tomato from './assets/tomato.png'

import githubIcon from './assets/github-icon.jpg'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div className='app'>
      <header>
        <img src={tomato} alt="" />
        <h1>Pomodoro Timer</h1>
      </header>
      <main>
        <Counter time={25} name={"Work"}/>
        <Counter time={5} name={"Rest"}/>
      </main>
      <footer>
        <h1>Made by <a href="https://github.com/Ktioru/" target="_blank" rel="noreferrer">Ktioru</a></h1><img src={githubIcon} width="64" height="64" />
      </footer>
    </div>
  )
}

export default App
