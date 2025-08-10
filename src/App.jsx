import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ maxWidth: 720, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Vite + React on GitHub Pages 🚀</h1>
      <p>สวัสดีปอนด์! นี่คือเดโมขึ้น GitHub Pages ด้วย Vite</p>
      <button onClick={() => setCount(c => c + 1)} style={{ padding: '10px 16px', borderRadius: 12 }}>
        count: {count}
      </button>
      <p style={{ marginTop: 16, color: '#666' }}>
        แก้ไฟล์ <code>src/App.jsx</code> แล้วดูผลได้ทันที
      </p>
    </div>
  )
}
