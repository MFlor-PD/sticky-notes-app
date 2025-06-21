import React from 'react'
import { createContext, useContext, useState } from 'react'

const ColorContext = createContext()

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#f0e68c') // Khaki

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  )
}

export const useColor = () => useContext(ColorContext)
