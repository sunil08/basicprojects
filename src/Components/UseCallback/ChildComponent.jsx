import React from 'react'

const ChildComponent = React.memo((props) => {
  console.log("Child component rerendering...");
  return (
    <div>
        <button onClick={props.handleClick}>
            {props.buttonName}
        </button>
    </div>
  )
})

export default ChildComponent

// In React.memo Component re-renders only when props changes
// If you are sending a function then React.memo will not be able to save you from re-rendering...