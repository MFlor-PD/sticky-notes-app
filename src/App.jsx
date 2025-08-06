import React from 'react'
import { ColorProvider } from './context/ColorContext'
import NoteBoard from './components/NoteBoard'
import './App.css'

const App = () => {
  return (
    <ColorProvider>
      <h1>🗒️ Sticky Notes</h1>
      <NoteBoard />
    </ColorProvider>
  )
}

export default App
