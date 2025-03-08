import { useEffect, useState } from 'react'
import { Booking } from '../types'
import { fetchBookings } from '../functions'
import { useNavigate } from 'react-router-dom'

export const BookingHistory = () => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const getBookings = async () => {
      const bookingResponse = await fetchBookings()
      if (bookingResponse) {
        setBookings(bookingResponse)
      }
    }
    getBookings()
  }, [])

  const handleBack = () => {
    navigate('/')
  }

  if (bookings.length === 0) return <p>There are no bookings</p>

  return (
    <>
      <button onClick={handleBack}>Booking History</button>
      <div className="card-container">
        {bookings.map((booking) => (
          <div key={booking.id} className="card">
            <img
              className="card-image"
              src={booking.image}
              alt={booking.name}
            />
            <p className="p-name">{booking.name}</p>
            <p>{booking.date.split('T')[0]}</p>
            <p>{booking.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}
