import { Request, Response } from 'express'
import join from './controllers/join'
import userCodelabs from './controllers/userCodelabs'
import ranking from './controllers/ranking'

interface Controller {
  join: (req: Request, res: Response) => void
  userCodelabs: (req: Request, res: Response) => void
  ranking: (req: Request, res: Response) => void
}

const controller: Controller = {
  join,
  userCodelabs,
  ranking,
}

export default controller
