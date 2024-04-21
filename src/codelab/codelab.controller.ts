import { Request, Response } from 'express'
import collectCodelab from './controllers/collectCodelab'

interface Controller {
  collectCodelab: (req: Request, res: Response) => void
}

const controller: Controller = {
  collectCodelab,
}

export default controller
