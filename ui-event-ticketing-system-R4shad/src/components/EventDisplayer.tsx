import { useEffect, useState } from 'react'
import { fetchEvents } from '../functions'
import { Event } from '../types'
import { useNavigate } from 'react-router-dom'

export const EventDisplayer = () => {
  const [events, setEvents] = useState<Event[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const getEvents = async () => {
      const eventsResponse = await fetchEvents()
      if (eventsResponse) {
        setEvents(eventsResponse)
      }
    }
    getEvents()
  }, [])

  const handleClick = (id: string) => {
    navigate(`/${id}`)
  }

  const handleHistory = () => {
    navigate('/history')
  }

  if (events.length === 0) return <p>No Events</p>
  return (
    <>
      <h1>Event Ticketing System</h1>
      <button onClick={handleHistory}>Booking History</button>
      <div className="card-container">
        {events.map((event) => (
          <div
            key={event.id}
            className="card"
            onClick={() => {
              handleClick(event.id)
            }}
          >
            <img className="card-image" src={event.image} alt={event.name} />
            <p className="p-name">{event.name}</p>
            <p>{event.date.split('T')[0]}</p>
            <p>{event.price}$</p>
          </div>
        ))}
      </div>
    </>
  )
}
