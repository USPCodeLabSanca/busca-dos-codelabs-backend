import { Request, Response } from 'express'
import prisma from '../../db'

const join = async (req: Request, res: Response) => {
  let { name, telegram } = req.body

  telegram = telegram.replace('@', '')

  try {
    const user = await prisma.user.findUnique({ where: { telegram } })

    if (user) return res.send({ succesful: true })

    await prisma.user.create({ data: { name, telegram } })

    res.send({ succesful: true })
  } catch (error) {
    console.error('[User Join] Error in join:', error)
    res.status(500).send({ error: 'Erro inesperado ao entrar :(' })
  }
}

export default join
