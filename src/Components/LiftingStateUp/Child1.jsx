import React from 'react'

const Child1 = (props) => {
  return (
    <div>
      <input type='text' onChange={(e) => props.setName(e.target.value)}/>
      <p>Name State value in Child1: {props.name}</p>
    </div>
  )
}

export default Child1
