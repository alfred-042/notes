'use client'
import React from 'react'

export default function Sidebar({ notes, activeId, onSelect, onCreate }) {
  return (
    <aside
      className="w-64 border-r p-4 bg-gradient-to-b from-[#A7D8F2] to-[#FBC4D6]"
      style={{ color: '#4B2E2E' }} // coklat tua untuk semua font
    >
      <h2 className="text-xl font-bold mb-4 tracking-wide">My Notes</h2>

      <button
        onClick={onCreate}
        className="w-full mb-6 bg-white text-[#4B2E2E] font-semibold py-2 rounded-lg shadow hover:bg-[#f9f4ef] transition"
      >
        + New Note
      </button>

      {notes.length === 0 && (
        <p className="italic opacity-70">Belum ada note</p>
      )}

      <ul className="space-y-2">
        {notes.map((n) => (
          <li
            key={n.id}
            onClick={() => onSelect(n.id)}
            className={`p-3 rounded-lg cursor-pointer transition ${
              n.id === activeId
                ? 'bg-white font-semibold shadow'
                : 'hover:bg-white/40'
            }`}
          >
            <div className="truncate font-semibold">
              {n.title || 'Untitled'}
            </div>
            <div className="text-xs opacity-70">
              {new Date(n.updatedAt).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
