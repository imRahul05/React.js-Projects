import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { NotesContext } from './Context'

const NotesDetails = () => {
  const { noteId } = useParams()
  const navigate = useNavigate()
  const { notes, deleteNote } = useContext(NotesContext)
  const note = notes && Object.entries(notes).find(([key]) => key === noteId)?.[1]

  const handleDelete = async () => {
    await deleteNote(noteId)
    navigate('/')
  }

  const handleEdit = () => {
    alert('Edit functionality not implemented.')
  }
 
  if (!note) {
    return <div>No note found</div>
  }

  return (
    <div 
      style={{ border: '1px solid black', margin: '10px', padding: '15px', maxWidth: '600px' }}
    >
      <h2>{note.title}</h2>
      <p><strong>Content:</strong> {note.content}</p>
      <p><strong>Tags:</strong> {note.tags && note.tags.join(', ')}</p>
      <div style={{ marginTop: '15px' }}>
        <button onClick={handleEdit} style={{ marginRight: '10px' }}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default NotesDetails
