'use client'
import React from 'react'

export default function NoteEditor({ note, onChange, onDelete }) {
  if (!note) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 italic">
        🐣 Pilih atau buat note baru dulu
      </div>
    )
  }

  const update = (patch) => onChange({ ...note, ...patch })

  return (
    <div className="flex flex-col h-full p-6 bg-yellow-100">
      {/* Header ala buku */}
      <div className="flex justify-between items-center mb-3 px-2 py-2 border-b-2 border-yellow-400 bg-yellow-50 rounded-t-md shadow-sm">
        <input
          value={note.title}
          onChange={(e) => update({ title: e.target.value })}
          className="font-bold text-lg text-yellow-900 bg-transparent focus:outline-none"
          placeholder="📓 Judul"
        />
        <input
          type="date"
          className="text-sm text-gray-600 bg-transparent focus:outline-none"
          onChange={(e) => update({ date: e.target.value })}
          value={note.date || ''}
        />
      </div>

      {/* Halaman surat */}
      <div className="flex-1 relative">
        <textarea
  value={note.content}
  onChange={(e) => update({ content: e.target.value })}
  className="w-full h-full p-6 pl-10 border border-yellow-300 rounded-b-md shadow-md resize-none 
             text-sm leading-relaxed text-gray-800 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
  placeholder="✨ Tulis cerita panjangmu di sini..."
  style={{
    backgroundColor: '#fffdf7', // broken white
    backgroundImage: `repeating-linear-gradient(
        to bottom,
        #fffdf7 0px,
        #fffdf7 23px,
        #fca5a5 24px
      ),
      linear-gradient(
        to right,
        #f87171 60px,
        transparent 60px
      )`,
    backgroundSize: '100% 24px, 100% 100%',
    lineHeight: '24px',
  }}
/>

      </div>

      {/* Tombol */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => update({})}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          💾 Simpan
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
          🗑️ Hapus
        </button>
      </div>
    </div>
  )
}
