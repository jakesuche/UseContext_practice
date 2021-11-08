import "./App.css";
import React, {useReducer, useState } from "react";
import { BrowserRouter , Switch, Link, Route } from 'react-router-dom'
import Home from './HomePage'
import FeedPage from './FeedPage'
import TodoState from './context/TodoState';
import TodoInput from './components/TodoInput/TodoInout'
import TodoList from './components/TodoList/TodoList'




export default function App() {


  return (
    <div className="App">
      <div className="app__todoApp">
      <TodoState>
        <TodoInput />
        <TodoList />
      </TodoState>

      </div>

       
    </div>
  );
}
