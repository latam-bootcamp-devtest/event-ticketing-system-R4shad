import { Request, Response } from 'express'
import { Event } from '../models/Event'

export const postEvent = async (req: Request, res: Response) => {
  try {
    const { name, date, availableSeats } = req.body

    if (!name || !date || !availableSeats) {
      res
        .status(400)
        .json({ message: 'Name, date and availableSeats are required' })
    } else {
      const currentDate = new Date()
      if (currentDate.getTime() > new Date(date).getTime()) {
        res.status(400).json({ message: 'date must be on future' })
      } else {
        if (availableSeats <= 0) {
          res
            .status(400)
            .json({ message: 'availableSeats must me greater than 0' })
        } else {
          const createdEvent = await Event.create({
            name,
            date,
            availableSeats,
          })
          res.status(201).json(createdEvent)
        }
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error })
  }
}
