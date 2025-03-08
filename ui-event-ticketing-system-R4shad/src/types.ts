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

export interface FormValues {
  name: string
  quantity: number
}

export const emptyForm: FormValues = {
  name: '',
  quantity: 0,
}
export interface PostEvent {
  applicationId: string
  userId: string
  eventId: string
  ticketQuantity: number
  customerName: string
}

export const USER_ID = `487c3d4f-0384-4a42-acf4-c1afc80e5c13`

export interface Booking {
  id: string
  name: string
  date: string
  image: string
  price: number
}
