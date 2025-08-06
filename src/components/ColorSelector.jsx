import React from 'react'
import { useColor } from '../context/ColorContext'

const ColorSelector = () => {
  const { color, setColor } = useColor()

  return (
    <div className="color-selector">
      <label>Selecciona un color: </label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  )
}

export default ColorSelector
