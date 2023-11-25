import { useEffect, useState } from 'react'
import { useRef } from 'react';

import './App.scss'



function Counter({time = 25, name}) {

  
  const [message, setMessage] = useState("Start")
  const [screenMinutes, setScreenMinutes] = useState(time)
  const [screenSeconds, setScreenSeconds] = useState(0)
  const minutes = useRef(time)
  const seconds = useRef(0)
  const timer = useRef(false)
  const buttonColor = useRef("")
  



  
  function activateTimer() {
    if(timer.current) {
      timer.current = false
      setMessage("Start")
      buttonColor.current = ""
    } else {
      timer.current = true
      setMessage("Stop")
      buttonColor.current = "active"
    }
    
  }

  useEffect(() => {
    console.log(minutes)
    
    const watch = setInterval(() => {
      if(timer.current == true) {
        if(seconds.current == 0) {
          minutes.current--
          seconds.current = 59
          setScreenMinutes(minutes.current)
          setScreenSeconds(seconds.current)
        } else {
          seconds.current--
          setScreenSeconds(seconds.current)
        }

      }
      
      
    }, 1000)
   
    return () => {
      clearInterval(watch)
      
    }

    

  }, []) 


  
  return (
    <div className='timerDiv'>
      <h2>{name} Time!</h2>
      <h2>{screenMinutes}:{seconds.current < 10 ? "0" : ""}{screenSeconds}</h2>

      <button onClick={() => activateTimer()} className={buttonColor.current}>{message} Pomodoro Timer</button>
    </div>
  )
}

export default Counter
