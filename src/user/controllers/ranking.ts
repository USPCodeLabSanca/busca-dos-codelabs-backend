import { Request, Response } from 'express'
import prisma from '../../db'

const ranking = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: [{ collectedCodelabsNumber: 'desc' }, { lastCollectedCodelabDate: 'asc' }],
      take: 10,
    })

    res.send({ users })
  } catch (error) {
    console.error('[User Ranking] Error in get users:', error)
    res.status(500).send({ error: 'Erro inesperado ao obter ranking :(' })
  }
}

export default ranking
