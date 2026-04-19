import React, { useEffect, useRef, useState } from 'react'
import './colontimer.css'

const ColonTimer = () => {

  const [timeCount, setTimeCount] = useState(0);
  const [active, setActive] = useState(false);
  const [pause, setPause] = useState(false);
  const timerRef = useRef(null);

  useEffect(()=>{
    if(active && !pause && timeCount > 0){
        timerRef.current = setInterval(()=> {
            setTimeCount(prev => (prev - 1));
        },1000)
    }else if(timeCount === 0){
        clearInterval(timerRef.current);
        if(active){
            alert('Time is Up');
        }
        setActive(false);
        setPause(true);
        console.log("stopped");
    }
    
    return () => clearInterval(timerRef.current);
  },[timeCount, active, pause])

  const handleInput = (event) => {
    console.log(event.target.value);
    setTimeCount(parseInt(event.target.value * 60));
  }

  const formatTime = () => {
     const minutes = String(Math.floor(timeCount/60)).padStart(2,'0');
     const seconds = String(timeCount%60).padStart(2,'0');
     return `${minutes} : ${seconds}`;
  }

  function onStart(){
    if(timeCount === 0){
        alert('Input time data to continue');
    }else{
        setActive(true);
        setPause(false);
    }
  }

  function onPause(){
    setPause(!pause);
  }

  function onReset(){
    clearInterval(timerRef.current);
    setActive(false);
    setPause(false);
    const value = document.getElementById("myInput").value.trim();
    if(value === ''){
        setTimeCount(0);
    }else{
        setTimeCount(parseInt(value * 60));
    }
  }

  return (
    <div className='countdown-timer'>
      <div>Countdown Timer</div>
      <div className='timer-display'>
        <input id='myInput' type='number' placeholder='Enter time in minutes' onChange={handleInput}/>
        <div>{formatTime()}</div>
      </div>
      <div className='timer-controls'>
        <button onClick={onStart} disabled={active && !pause}>Start</button>
        <button onClick={onPause} disabled={!active}>{ pause ? 'Resume' : 'Pause' }</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  )
}

export default ColonTimer;
