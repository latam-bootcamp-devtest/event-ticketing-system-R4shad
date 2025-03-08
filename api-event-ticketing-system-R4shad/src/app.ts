import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { Event } from './models/Event'
import { EventRoutes } from './routes/event.routes'

export class App {
  app: express.Application
  port: string

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '3000'

    // Middlewares
    this.app.use(express.json()) // for parsing application/json
    this.app.use(cors())
    this.app.use(morgan('dev')) // for logging requests
  }

  async init() {
    try {
      this.connectDatabase()
      this.routes()
      this.startServer()
    } catch (error) {
      console.error('Error during initialization:', error)
    }
  }

  private startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}/api`)
    })
  }

  private async connectDatabase() {
    try {
      await Event.sync()
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }

  private routes() {
    this.app.use('/api/events', EventRoutes)
  }
}
