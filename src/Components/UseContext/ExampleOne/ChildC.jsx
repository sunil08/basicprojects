import React, { useContext } from 'react'
import UserContext, { ThemeContext, WorkingContext } from './CreateContext';

function ChildC() {
  const user = useContext(UserContext);
  const {theme,setTheme} = useContext(ThemeContext);
  const workStatus = useContext(WorkingContext);

  function toggletheme(){
    // if(theme === 'light')
    //   setTheme('dark')
    // else 
    //   setTheme('light')
    // OR
    setTheme(state => (state === 'light' ? 'dark' : 'light'))
  }

  return (
    <div>
      User: {user.name}
      <p>Work Status: {workStatus}</p>
        <p>
        <button onClick={toggletheme}>
          Change Theme
        </button>
        </p>
    </div>
  )
}

export default ChildC

// Another way of doing it

// A component may consume multiple contexts
// function Content() {
//   return (
//     <ThemeContext.Consumer>
//       {theme => (
//         <UserContext.Consumer>
//           {user => (
//             <ProfilePage user={user} theme={theme} />
//           )}
//         </UserContext.Consumer>
//       )}
//     </ThemeContext.Consumer>
//   );
// }
// Another way to consume the provider: Nested Consumers
// A Consumer is used to read the current value of a context.
// It expects a function as a child (render prop pattern).
// It is introduced in react 16.3 and
// useContext is used as hook in react 16.8
