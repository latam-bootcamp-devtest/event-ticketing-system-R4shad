import {
  API_URL,
  APPLICATION_ID,
  Event,
  EventDetailedI,
  PostEvent,
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
      console.error('error fetching events')
    }
  } catch (error) {
    console.error('error fetching events', error)
  }
}

export const postOneEvent = async (event: PostEvent) => {
  console.log(event)
  console.log(JSON.stringify(event))
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
    console.log(response)
    if (response.ok) {
      const data: EventDetailedI = await response.json()
      return data
    } else {
      console.error('error fetching events')
      return response
    }
  } catch (error) {
    console.error('error fetching events', error)
  }
}
