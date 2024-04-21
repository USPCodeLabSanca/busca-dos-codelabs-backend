import { Request, Response } from 'express'
import prisma from '../../db'
import { send } from 'process'

const collectCodelab = async (req: Request, res: Response) => {
  const { telegram, qrCode } = req.body

  try {
    const user = await prisma.user.findUnique({ where: { telegram }, include: { codelabs: true } })

    if (!user) return res.status(404).send({ error: 'Usuário não encontrado' })

    const codelab = await prisma.codelab.findFirst({ where: { qrCode } })

    if (!codelab) return res.status(404).send({ error: 'Codelab não encontrado' })

    const didUserAlreadyCollectedThisCodelab = user!.codelabs.some((c) => c.id === codelab!.id)

    if (didUserAlreadyCollectedThisCodelab) return res.send({ collected: true })

    await prisma.user.update({
      where: { telegram },
      data: {
        codelabs: { connect: { id: codelab!.id } },
        collectedCodelabsNumber: { increment: 1 },
        lastCollectedCodelabDate: new Date(),
      },
    })

    res.send({ collected: true })
  } catch (error) {
    console.error('[Codelab Collect] Error in collect:', error)
    res.status(500).send({ error: 'Erro inesperado ao coletar codelab :(' })
  }
}

export default collectCodelab
