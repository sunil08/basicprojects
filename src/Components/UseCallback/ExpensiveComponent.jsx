import React, { useCallback, useEffect, useRef, useState } from 'react'

const ExpensiveComponent = () => {

    // We stop the re-run of the function in useMemo
    // We cannot stop the re-run of function in useCallback instead we stop to recreate the function

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const previousFunction = useRef(null);
    
    const expensiveCalculation = useCallback(() =>{
        console.log("Running expensive calculation ... ");
        let result = 0;
        for (let i =0; i < 1000000000; i++) {
            result += i;
        }
        return result;
    }, [count]);
    // Here function gets recreated when count changes and when text value changes it does not recreated.
    
    useEffect(() => { // To check for function re-creation
        if(previousFunction.current) {
            if(previousFunction.current === expensiveCalculation) {
                console. log("Function not re-created");
            }else {
                console. log("Function got re-created");
            }
        }
        else {
            previousFunction.current = expensiveCalculation;
        }
    }, [expensiveCalculation])

    return (
      <div>
        <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Type something'
        />
        <p>Expensive Calculation Result: {expensiveCalculation()}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
    )
}

export default ExpensiveComponent

// useCallback function ko memoise krta h, taki har render m usko naya reference na mile unless dependency array m changes na aaye

// useMemo  :
// Memoizes a value.
// Use when you want to remember the result of a calculation (i.e., a value).
// It returns a memoized value.



// useCallback :
// Memoizes a function.
// Use when you want to remember the function itself (i.e., avoid re-creating the function on every render).
// It returns a memoized function.

// In short one return value and other return function 


// To optimize the function use useCallback
// to optimize the value use useMemo

// https://www.youtube.com/watch?v=ksXqhaIY2kA
// https://www.youtube.com/watch?v=pZjm9rX5GdU&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=76

// virendra

