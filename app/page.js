'use client'
import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import NoteEditor from '../components/NoteEditor'
import sampleNotes from '../lib/sampleNotes'

export default function Page() {
  const [notes, setNotes] = useState([])
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const raw = localStorage.getItem('notes_app')
    if (raw) {
      const data = JSON.parse(raw)
      setNotes(data)
      setActiveId(data[0]?.id || null)
    } else {
      setNotes(sampleNotes)
      setActiveId(sampleNotes[0]?.id)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes_app', JSON.stringify(notes))
  }, [notes])

  const createNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: 'Untitled',
      content: '',
      updatedAt: new Date().toISOString(),
    }
    setNotes([newNote, ...notes])
    setActiveId(newNote.id)
  }

  const updateNote = (updated) => {
    setNotes(notes.map((n) => (n.id === updated.id ? { ...updated, updatedAt: new Date().toISOString() } : n)))
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id))
    if (id === activeId) setActiveId(null)
  }

  const activeNote = notes.find((n) => n.id === activeId)

  return (
    <div className="flex h-screen">
      <Sidebar notes={notes} activeId={activeId} onSelect={setActiveId} onCreate={createNote} />
      <div className="flex-1">
        <NoteEditor note={activeNote} onChange={updateNote} onDelete={deleteNote} />
      </div>
    </div>
  )
}
