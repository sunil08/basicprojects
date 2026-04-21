import './App.css'
import ChildrenProps from './Components/ChildrenProps'
import ConditionalRendering from './Components/ConditionalRendering'
import ParentChildLifting from './Components/LiftingStateUp/Parent'
import ListRendering from './Components/ListRendering'
import FunctionParent from './Components/PassingFunctions/FunctionParent'
import CallbackParent from './Components/UseCallback/CallbackParent'
import ChildA from './Components/UseContext/ExampleOne/ChildA'
import UserContext from './Components/UseContext/ExampleOne/CreateContext'
import ParentOne from './Components/UseContext/ExampleOne/ParentOne'
import Datafetcher from './Components/UseEffect/Datafetcher'
import RenderUseEffect from './Components/UseEffect/RenderUseEffect'
import Timercomponent from './Components/UseEffect/Timercomponent'
import ExpensiveComponent from './Components/UseCallback/ExpensiveComponent'
import ExpensiveMemo from './Components/UseMemo/ExpensiveMemo'
import TimerRef from './Components/UseRef/TimerRef'
import Variable from './Components/UseRef/VariableRef'
import PaginationPage from './Components/Pagination/PaginationPage'
import TablePage from './Components/TablePagination/TablePage'
import ButtonApiCallPaging from './Components/TablePagination/ButtonApiCallPaging'
import ColonTimer from './Components/UseRef/ColonTimer'
import ToDoList from './Components/ToDoList/ToDoList'
import LoginForm from './Components/FormsProgram/LoginForm'
import Quiz from './Components/QuizApp/Quiz'
import AuthForm from './Components/LoginSignup/AuthForm'
import TicTacToe from './Components/TicTacToe/TicTacToe'
import Weather from './Components/WeatherApp/Weather'
import ManageContactsPage from './Components/ContactManager/ManageContactsPage'

function App() {

  return (
    <>
      {/* <ChildrenProps/> */}
      {/* <ConditionalRendering loggedIn={true}/> */}
      {/* <ListRendering/> */}
      {/* <ParentOne/> */}
      {/* <ParentChildLifting/> */}
      {/* <FunctionParent/> */}
      {/* <RenderUseEffect/> */}
      {/* <Timercomponent/> */}
      {/* <Datafetcher/> */}
      {/* <VariableRef/> */}
      {/* <TimerRef/> */}
      {/* <ColonTimer/> */}
      {/* <ExpensiveMemo/> */}
      {/* <CallbackParent/> */}
      {/* <ExpensiveComponent/> */}
      {/* <PaginationPage/> */}
      {/* <TablePage/> */}
      {/* <ButtonApiCallPaging/> */}
      {/* <ToDoList/> */}
      {/* <LoginForm/> */}
      {/* <Quiz/> */}
      {/* <AuthForm/> */}
      {/* <TicTacToe/> */}
      {/* <Weather/> */}
      <ManageContactsPage/>
    </>
  )
}

export default App
