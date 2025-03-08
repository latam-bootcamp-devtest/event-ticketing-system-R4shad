import {
  API_URL,
  APPLICATION_ID,
  Booking,
  Event,
  EventDetailedI,
  PostEvent,
  USER_ID,
} from './types'

export const fetchEvents = async () => {
  try {
    const response = await fetch(`${API_URL}${APPLICATION_ID}`)
    if (response.ok) {
      const data: Event[] = await response.json()
      return data
    } else {
      console.error('error fetching events')
    }
  } catch (error) {
    console.error('error fetching events', error)
  }
}

export const fetchOneEvent = async (id: string) => {
  try {
    const response = await fetch(
      `https://goldfish-app-fbulw.ondigitalocean.app/Event/${id}?applicationId=${APPLICATION_ID}`
    )
    if (response.ok) {
      const data: EventDetailedI = await response.json()
      return data
    } else {
      console.error('error fetching one event')
    }
  } catch (error) {
    console.error('error fetching one event', error)
  }
}

export const postOneEvent = async (event: PostEvent) => {
  try {
    const response = await fetch(
      `https://goldfish-app-fbulw.ondigitalocean.app/Booking`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      }
    )
    if (response.ok) {
      return response
    } else {
      console.error('error post booking')
    }
  } catch (error) {
    console.error('error post booking', error)
  }
}

export const fetchBookings = async () => {
  try {
    const response = await fetch(
      `https://goldfish-app-fbulw.ondigitalocean.app/User/${USER_ID}/Events?applicationId=${APPLICATION_ID}`
    )
    if (response.ok) {
      const data: Booking[] = await response.json()
      return data
    } else {
      console.error('error fetching bookings')
    }
  } catch (error) {
    console.error('error fetching bookings', error)
  }
}
