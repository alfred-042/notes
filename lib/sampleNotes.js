// lib/sampleNotes.js
const sampleNotes = [
  {
    id: 'n1',
    title: 'Welcome!',
    content: 'Ini catatan pertama kamu. Cobain fitur search, pin, export/import, dan preview markdown.',
    pinned: true,
    tags: ['intro'],
    // jangan set updatedAt di sini
  },
  {
    id: 'n2',
    title: 'To-do kuliah',
    content: '- Build website\n- Deploy ke Netlify\n- Siap-siap kena pentesting',
    pinned: false,
    tags: ['todo'],
  }
]

export default sampleNotes
