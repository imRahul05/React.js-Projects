import React from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StopWatch from './components/day2/StopWatch'
import Navbar from './components/Navbar'
import Homepage from './components/Notes/Homepage'
import NotesDetails from './components/Notes/ContextAPI/NotesDetails'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/notes/:noteId" element={<NotesDetails />} />
       
      </Routes>
    </>
  )
}

export default App
