import { createContext } from "react"

const ThemeContext = createContext();
const WorkingContext = createContext("working");

// Create Context
const UserContext = createContext();
export default UserContext;
// With named or anonymous function don't use arrow function. Above all are name functions.
// In this way UserContext becomes a function, not a context object,
// When you try to use it with useContext(UserContext)


// 1. Create context
// 2. Wrap all the consumers inside the providers
// 3. pass the value

export {ThemeContext, WorkingContext}
// If not used "export {ThemeContext}" and instead used 
// export const ThemeContext = createContext(); it shows below error
// Fast refresh only works when a file only exports components. Move your React context(s) to a separate file.

// In normal multiple Component export from same files without default export works well 
// but in case of context it requires one default export or contexts to be defined in separate files.

//---------------------------------------------------------------------
// const UserContext = createContext({
//     loggedInUser: "Default User"
// })

// creating a context with a value is useful when a provider is not used then it will provide the default value.
// Or if a value is not provided by provider then this value will be used.
