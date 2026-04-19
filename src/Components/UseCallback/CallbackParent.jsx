import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const CallbackParent = () => {

    const [count, setCount] = useState(0);

    // function handleClick(){
    //     setCount(count + 1);
    // }
    // When Component re-renders then the function also re-creates, hence it's reference also changes. So previous reference and new reference changes hence re-render occurs.
    // So we use useCallback to freeze the function to recreate and reference change when the parent rerenders

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count])
    // Without dependency don't work
    // Empty [] dependency freezes after step 1
    // [count] works perfectly

    return (
      <div>
        <p>{count}</p>
        <button onClick={handleClick}>
            Increment
        </button>
        <div>
            {/* when parent component re-renders Child component also re-renders */}
            <ChildComponent buttonName="Click me" handleClick={handleClick}/>
        </div>
      </div>
    )
}

export default CallbackParent

// Handling expensive operation
