import React, { useState } from 'react'
import { useColor } from '../context/ColorContext'
import { useNotes } from '../hooks/useNotes'
import Note from './Note'
import ColorSelector from './ColorSelector'

const NoteBoard = () => {
  const { color } = useColor()
  const { notes, addNote, deleteNote } = useNotes()
  const [text, setText] = useState('')

  const handleAdd = () => {
    addNote(text, color)
    setText('')
  }

  return (
    <div className="note-board">
      <ColorSelector />
      <div className="note-input">
        <input
          type="text"
          placeholder="Escribe una nota..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Crear Nota</button>
      </div>
      {notes.length === 0 ? (
        <p className="no-notas">No hay notas.</p>
      ) : (
        <div className="note-list">
          {notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              text={note.text}
              color={note.color}
              onDelete={deleteNote}
            />
          ))}
        </div>
      )}
      {notes.length >= 10 && <p className="limite-notas">❌ Límite de 10 notas alcanzado.</p>}
    </div>
  )
}

export default NoteBoard
