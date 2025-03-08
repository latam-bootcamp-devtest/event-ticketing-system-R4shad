import { Router } from 'express'
import { getEvents, postEvent } from './../controllers/even.controllers'

export const eventRoutes = Router()

eventRoutes.post('/', postEvent)

eventRoutes.get('/:page&:pageSize', getEvents)
