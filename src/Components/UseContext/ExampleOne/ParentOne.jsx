import React, { useState } from 'react'
import ChildC from './ChildC'
import UserContext, {ThemeContext, WorkingContext} from './CreateContext';
import ChildE, {ChildD, ChildF} from './ChildD';
// https://stackoverflow.com/questions/53346462/react-multiple-contexts

// 1. Create context
// 2. Wrap all the consumers inside the providers
// 3. pass the value

const ParentOne = () => {
  const [user, setUser] = useState({name:"Sunil"}); // As JSON
  const [theme, setTheme] = useState('light'); // As String
  // Sending a value with dynamic setting of value means send it with state
  const workStatus = "not working";
  // Sending static value can be send in object only as {"not working"} or {workstatus} 
  
  return (
    <div>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <UserContext.Provider value={user}>
            <WorkingContext.Provider value={workStatus}>
            <div id='container' style={{backgroundColor:theme === 'light' ? 'beige' : 'black'}}>
                <ChildC/>
            </div>
            </WorkingContext.Provider>
        </UserContext.Provider>
      </ThemeContext.Provider>

      <ChildD/>
      <ChildE/>
      <ChildF/>
    </div>
  )
}

export default ParentOne
