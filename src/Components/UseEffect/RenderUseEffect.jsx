import React, { useEffect, useState } from 'react'

const RenderUseEffect = () => {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  //Scenario 1:
  // useEffect(()=> {
  //   // on every button click it will show alert
  //   alert("I re-render again and again");
  // })

  //Scenario 2:
  // Runs when count dependency is changed
  // useEffect(()=> {
  //   alert("I will run on first render only...");
  // },[])

  //Scenario 3:
  // Runs when count dependency is changed
  // useEffect(()=> {
  //   alert("I will render when button is clicked...");
  // },[count])
  // ye count update hone ke baad chalta hai but render hone se pehle chalta hai

  // Scenario 4:
  // Runs when any dependency changes
  // useEffect(() => {
  //   alert("I will run when any of count/total is run");
  // },[count, total])

  // Scenario 5:
  useEffect(() => {
    alert("Count updated...");
    return () => {
      alert("I will run on unmount...");
    }
  },[count])
  // If no dependency used then it will throw alert on every render...
  
  function handleClick() {
    setCount(count => (count + 1))
  }
  function handleSetTotal() {
    setTotal(total => (total + 1))
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
       <button onClick={handleSetTotal}>
        Total Me
      </button>
      <p>{count} - {total}</p>
    </div>
  )
}

export default RenderUseEffect
