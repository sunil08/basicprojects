import React from 'react'

const Child2 = (props) => {
  return (
    <div>
      <input type='text' onChange={(e)=>props.setName(e.target.value)}/>
      <p>Valye of name in Child2: {props.name}</p>
    </div>
  )
}

export default Child2
 