import "./App.css";
import React, {useReducer, useState, useContext } from "react";
import { BrowserRouter , Switch, Link, Route } from 'react-router-dom'
import Home from './HomePage'
import FeedPage from './FeedPage'
import TodoState from './context/TodoState';
import TodoState1, {AppContext} from './context1/context1';
import TodoInput from './components/TodoInput/TodoInout'
import TodoList from './components/TodoList/TodoList'


const Example = () => {
  const value = useContext(AppContext)
  console.log(value)
  return (
    <div>

    </div>
  )
}





export default function App() {

  const value = useContext(AppContext)
  console.log(value?.value, value?.setValue)


  return (
    <div className="App">
      <div className="app__todoApp">
      {/* <TodoState>
        <TodoInput />
        <TodoList />
      </TodoState> */}
      <TodoState1>
        <Example />
      </TodoState1>


      </div>

       
    </div>
  );
}
