export interface Event {
  id: string
  name: string
  date: string
  image: string
  price: number
}

export interface EventDetailedI {
  id: string
  name: string
  date: Date
  description: string
  image: string
  availableTickets: number
  location: string
  price: number
}

export const API_URL =
  'https://goldfish-app-fbulw.ondigitalocean.app/Event?applicationId='
export const APPLICATION_ID = 'ed12ce45-df1e-428a-953a-5c7fb53e42f0'
