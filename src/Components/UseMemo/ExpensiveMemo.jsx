import React, { useMemo, useState } from 'react'

const ExpensiveMemo = () => {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);

    function expensiveTask(num){
        console.log("Expensive task...")
        for(let i=0; i< 1000000000; i++){}
        return num * 2;
    }

    //let doubleValue = expensiveTask(input); // here it will delay the UI
    let doubleValue = useMemo(()=> expensiveTask(input), [input]);
    // Only last answer is stored.
    // We stop the re-run of the function in useMemo
    // We cannot stop the re-run of function in useCallback
    

    return (
      <div>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
        <div>
            Count: {count}
        </div>
        <input type='number' placeholder='enter count' value={input} 
            onChange={(e) => setInput(e.target.value)}/>
        <div>
            Double : {doubleValue}
        </div>
      </div>
    )
}

export default ExpensiveMemo
