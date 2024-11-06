import { Request, Response } from 'express'
import prisma from '../../db'

const userCodelabs = async (req: Request, res: Response) => {
  const { telegram } = req.params

  try {
    const user = await prisma.user.findUnique({ where: { telegram } })

    if (!user) return res.status(404).send({ error: 'Usuário não encontrado' })

    const codelabs = await prisma.codelab.findMany({
      where: { users: { some: { telegram } } },
      select: { id: true, order: true, name: true, image: true, description: true, background: true },
    })

    res.send({ codelabs })
  } catch (error) {
    console.error('[User Codelabs] Error in get codelabs:', error)
    res.status(500).send({ error: 'Erro inesperado ao obter seus codelabs :(' })
  }
}

export default userCodelabs
