import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NotesContext } from './ContextAPI/Context'

const Homepage = () => {
  const { notes } = useContext(NotesContext)
  
  return (
    <>
      { Object.entries(notes).map(([key, note]) => (
        <Link key={key} to={`/notes/${key}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div 
            style={{ border: '1px solid black', margin: '5px', padding: '10px' }}
          >
            {note.title}
          </div>
        </Link>
      ))}
    </>
  )
}

export default Homepage