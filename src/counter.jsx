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
  


  function resetTimer() {
    timer.current = false
    minutes.current = time
    seconds.current = 0
    buttonColor.current = ""
    setMessage("Start")
    setScreenMinutes(time)
    setScreenSeconds(0)
  }
  
  function activateTimer() {
    if(timer.current) {
      timer.current = false
      setMessage("Resume")
      buttonColor.current = ""
    } else {
      timer.current = true
      setMessage("Pause")
      buttonColor.current = "active"
    }
    
  }

  useEffect(() => {
    console.log(minutes)
    
    const watch = setInterval(() => {
      if(timer.current == true) {
        if(seconds.current == 0 && minutes.current == 0) {
          resetTimer()
        } else if(seconds.current == 0) {
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
        <div className='buttons'>
          <button onClick={() => activateTimer()} className={buttonColor.current}>{message}</button>
          <button onClick={() => resetTimer()} >Reset</button>
        </div>
      
    </div>
  )
}

export default Counter
