import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { EventDisplayer } from './components/EventDisplayer'
import { EventDetailed } from './components/EventDetailed'
import { BookingHistory } from './components/BookingHistory'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventDisplayer />} />
        <Route path="/:id" element={<EventDetailed />} />
        <Route path="/history" element={<BookingHistory />} />
      </Routes>
    </Router>
  )
}

export default App
