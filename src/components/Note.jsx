import React from 'react'

const Note = ({ id, text, color, onDelete }) => {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  )
}

export default Note
