import { useEffect, useState } from 'react'
import './App.css'
import { fetchEvents } from './functions'
import { Event } from './types'

function App() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const getEvents = async () => {
      const eventsResponse = await fetchEvents()
      console.log(eventsResponse)
      if (eventsResponse) {
        setEvents(eventsResponse)
      }
    }
    getEvents()
  }, [])

  return (
    <>
      <h1>Event Ticketing System</h1>
      <div className="event-container">
        {events.map((event) => (
          <div key={event.id} className="event">
            <img className="event-image" src={event.image} alt={event.name} />
            <p>{event.name}</p>

            <p>{event.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
