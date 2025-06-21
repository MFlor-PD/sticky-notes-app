import React from 'react'

const Note = ({ id, text, color, onDelete }) => {
  return (
    <div style={{ backgroundColor: color, padding: '10px', margin: '10px' }}>
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  )
}

export default Note
