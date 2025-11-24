import { useState } from 'react'  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery';
import ToDoList from './components/ToDoList';
import Profile from './components/Profile';
import PackingList from './components/PackingList';
import Impure from './components/Impure';
import Pure from './components/Pure';
import List from './components/List';
import RootComponent from './components/RootComponent';


function App() {

  return (
    <>
      <PackingList/>
      <Gallery/>
      <ToDoList/>
      <List/>
      <h1>Impure Component</h1>
      <Impure/>
      <h1>Pure Component</h1>
      <Pure/>
      <RootComponent/>
      
    </>
  )
}

export default App