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
      console.log(eventsResponse)
      if (eventsResponse) {
        setEvents(eventsResponse)
      }
    }
    getEvents()
  }, [])

  const handleClick = (id: string) => {
    navigate(`/${id}`)
  }

  return (
    <>
      <h1>Event Ticketing System</h1>
      <div className="event-container">
        {events.map((event) => (
          <div
            key={event.id}
            className="event"
            onClick={() => {
              handleClick(event.id)
            }}
          >
            <img className="event-image" src={event.image} alt={event.name} />
            <p>{event.name}</p>
            <p>{event.date.split('T')[0]}</p>
            <p>{event.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}
