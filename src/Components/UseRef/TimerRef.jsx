import React, { useRef, useState } from 'react'

const TimerRef = () => {

    const [time, setTime] = useState(0);
    const timer = useRef(null); // It does not create re-renders
    // If we don't retain the value then clearInterval value cannot be called.

    function startTimer(){
        timer.current = setInterval(() => {
            setTime(time => (time + 1));
        },1000);
        // to stop looping of setInterval we use the returned value by setInterval
    }

    function stopTimer(){
        clearInterval(timer.current);
        timer.current = null;
    }
   
    function resetTimer(){
        stopTimer();
        setTime(0);
    }

    return (
      <div>
        <h1>StopWatch: {time} seconds</h1>
        <button onClick={startTimer}>
            Start
        </button>
        <button onClick={stopTimer}>
            Stop
        </button>
        <button onClick={resetTimer}>
            Reset
        </button>
      </div>
    )
}

export default TimerRef
