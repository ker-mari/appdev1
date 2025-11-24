import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery';
import ToDoList from './components/ToDoList';
import Profile from './components/Profile';
import PackingList from './components/PackingList';


function App() {

  return (
    <>
      <PackingList/>
      <Gallery/>
      <ToDoList/>
      <List/>
    </>
  )
}

export default App