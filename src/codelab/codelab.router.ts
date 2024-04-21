import express from 'express'
import controller from './codelab.controller'

const router = express.Router()

router.route('/').post(controller.collectCodelab)

export default router
