import React, { useEffect, useRef, useState } from 'react'

const VariableRef = () => {
    const [count, setcount] = useState(0);
    let value = useRef(0); // w/o useRef used value = 1, it will log value = 1 and does not change on renders
    let btnRef = useRef("green");

    useEffect(() => {
        console.log("Rendered again...");
    })

    function increment(){
        value.current = value.current + 1;
        console.log("Value of value is: ", value.current);
        setcount(count + 1);
    }

    function changeColor(){
        let color = ((window.getComputedStyle(btnRef.current).color === "green") ? "beige" : "green");
        btnRef.current.style.backgroundColor = color;
        //btnRef.current = color;
    }

    return (
      <div>
        <p>{count}</p>
        <button ref = {btnRef} style={{backgroundColor: "green"}}onClick={increment}>Increment Value</button>
        <button onClick={changeColor}>Change Color</button>
      </div>
    )
}

export default VariableRef;
