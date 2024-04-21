import express from 'express'

import usersRouter from '../user/user.router'
import codelabsRouter from '../codelab/codelab.router'

const router = express.Router()

router.use('/users', usersRouter)
router.use('/codelabs', codelabsRouter)

export default router
