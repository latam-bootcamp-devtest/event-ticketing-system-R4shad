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

export const getEvents = async (req: Request, res: Response) => {
  try {
    const page = req.params.page
    const pageSize = req.params.pageSize

    const transformedPageSize = parseInt(pageSize.split('=')[1])
    const transformedPage = parseInt(page.split('=')[1])
    const events = await Event.findAll()

    const totalEvents = events.length
    const totalPages: number = events.length % transformedPageSize
    console.log(totalEvents)
    const resFormat = {
      currentPage: transformedPage,
      pageSize: transformedPageSize,
      totalPages: totalPages,
      events: events,
    }
    res.status(200).json(resFormat)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error })
  }
}
