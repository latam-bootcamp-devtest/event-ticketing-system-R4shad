import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOneEvent } from '../functions'
import { BuyForm } from './BuyForm'
import './EventDetailed.css'
import { EventDetailedI } from '../types'

export const EventDetailed = () => {
  const [event, setEvent] = useState<EventDetailedI | null>(null)
  const { id } = useParams()
  const [paramId, setParamId] = useState<string>()
  const navigate = useNavigate()

  const [isBuying, setIsBuying] = useState(false)

  useEffect(() => {
    if (id) setParamId(id)
    const getEvent = async () => {
      if (paramId) {
        const eventResponse = await fetchOneEvent(paramId)
        if (eventResponse && eventResponse !== null) {
          setEvent(eventResponse)
        }
      }
    }
    getEvent()
  }, [id, paramId])

  const handleReturn = () => {
    navigate('/')
  }

  const handleBuy = () => {
    setIsBuying(!isBuying)
  }

  if (!event) return <p>Loading</p>
  return (
    <>
      <button onClick={handleReturn}>Go back</button>
      <div className="event-container">
        <aside>
          <img className="detailed-img" src={event.image} alt={event.name} />
        </aside>
        <aside>
          <p className="p-name">{event.name}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
          <p>{event.availableTickets}</p>
          <p>{event.price}</p>
          {!isBuying && <button onClick={handleBuy}>Book Tickets</button>}
          {isBuying && <button onClick={handleBuy}>Cancel</button>}
          {isBuying && (
            <BuyForm price={event.price} paramId={paramId}></BuyForm>
          )}
        </aside>
      </div>
    </>
  )
}
