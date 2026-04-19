import React, { useEffect, useState } from 'react'

const Timercomponent = () => {
    const [count, setcount] = useState(0);
    useEffect(() => {
      console.log("rendering...");
        const interval = setInterval(() => {
            console.log("Set interval executed");
            setcount((count)=>(count + 1));
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("Component unmounted.......")
        }
    })
  return (
    <div>
      <h1>Seconds: {count}</h1>
    </div>
  )
}

export default Timercomponent
