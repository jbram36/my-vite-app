// src/components/App.tsx
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'

export default function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  )
}