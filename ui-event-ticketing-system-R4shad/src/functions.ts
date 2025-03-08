import { API_URL, APPLICATION_ID, Event } from './types'

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
