//import MovieRootPage from './MoveRatintImdb/MovieRootPage';
import './App.css';
//import RootCreate from './Pagination/RootCreate';
// import data from './ToDoApp/Data';
// import ToDoMainComponent from './ToDoApp/ToDoMainComponent';
//import ParentComponent from './UseState/ParentComponent';
//import UseEffectWithParent from './UseEffect/UseEffectWithParent';
//import ContextProvider from './ThemeContext/ContextProvider'
import { configureStore } from "@reduxjs/toolkit";
import DashBoardComponent from './ToolKit/DashBoardComponent.js';
import loginReducer from "./ToolKit/loginReducer.js";
import { Provider } from "react-redux";
import LoginComponent from './ToolKit/LoginComponent.js';
import PendingTasksFun from './ToolKit/PendingTasksFun.js';
import CompletedItems from './ToolKit/CompletedItems.js';
const store = configureStore(
  {
    reducer: loginReducer
  }
)
function App() {

  return (
    // <div className="App">
    //  {/* <ParentComponent></ParentComponent> */}
    //  <UseEffectWithParent></UseEffectWithParent>
    // </div>
    <>
      {/* //<MovieRootPage></MovieRootPage> */}
      {/* <RootCreate></RootCreate> */}
      {/* <ToDoMainComponent alldata={data}></ToDoMainComponent> */}
      {/* <ContextProvider></ContextProvider> */}
      <Provider store={store}>
        <LoginComponent></LoginComponent>
        <DashBoardComponent></DashBoardComponent>
        <PendingTasksFun></PendingTasksFun>
        <CompletedItems></CompletedItems>
      </Provider>
    </>
  );
}

export default App;
