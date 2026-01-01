import { useState } from 'react'
import Base from './components/Base.jsx'
import Resume from './components/Resume.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/resume.pdf" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
