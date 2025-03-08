import { Router } from 'express'
import { postEvent } from './../controllers/even.controllers'

export const EventRoutes = Router()

EventRoutes.post('/', postEvent)
