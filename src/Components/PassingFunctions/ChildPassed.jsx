import React from 'react'

const ChildPassed = (props) => {
  return (
    <div>
      <button onClick={props.fun}>Increment</button>
    </div>
  )
}

export default ChildPassed
