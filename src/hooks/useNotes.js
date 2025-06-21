import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const useNotes = () => {
  const [notes, setNotes] = useState(() => {
    // Recuperar notas del localStorage al iniciar
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Guardar notas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, color) => {
    if (text.trim() === "") return;

    // Limitar a 10 notas como bonus extra
    if (notes.length >= 10) {
      alert("Límite de 10 notas alcanzado.");
      return;
    }

    const newNote = {
      id: uuidv4(),
      text,
      color,
    };

    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return { notes, addNote, deleteNote };
};

