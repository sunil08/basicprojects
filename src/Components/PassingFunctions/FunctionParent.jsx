import React, { useState } from 'react'
import ChildPassed from './ChildPassed';

const FunctionParent = () => {

    const [count, setcount] = useState(0);

    function increment(){
        setcount(count => (count+1));
    }

    return (
      <div>
        {count}
        <ChildPassed cData={count} fun={increment}/>
      </div>
    )
}

export default FunctionParent
