import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState({})
  const baseURL = 'https://testing-masai-default-rtdb.firebaseio.com/notes.json'
  
  const fetchNotes = async () => {
    const response = await axios.get(baseURL)
      setNotes(response.data)
      console.log(notes)
  }
  useEffect(() => {
    fetchNotes()
  }, [])

  const addNote = async (note) => {
    
  }

  const updateNote = async (id, updatedNote) => {
  }

  const deleteNote = async (id) => {
    await axios.delete(`https://testing-masai-default-rtdb.firebaseio.com/notes/${id}.json`)
  }

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  )
}
