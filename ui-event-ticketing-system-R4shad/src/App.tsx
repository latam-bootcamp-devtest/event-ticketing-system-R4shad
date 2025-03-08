import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { EventDisplayer } from './components/EventDisplayer'
import { EventDetailed } from './components/EventDetailed'
function App() {
  return (
    <Router>
      <h1>Contact Manager System</h1>
      <Routes>
        <Route path="/" element={<EventDisplayer />} />
        <Route path="/:id" element={<EventDetailed />} />
      </Routes>
    </Router>
  )
}

export default App
