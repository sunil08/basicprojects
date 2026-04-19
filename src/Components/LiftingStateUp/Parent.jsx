import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const ParentChildLifting = () => {
  const [name, setName] = useState();

  return (
    <div>
      <Child1 title="Child1" name={name} setName={setName}/>
      <Child2 title="Child2" name={name} setName={setName}/>
      <p>Value of name from Child to Parent: {name}</p>
    </div>
  )
}

export default ParentChildLifting
