import express from 'express'
import controller from './user.controller'

const router = express.Router()

router.route('/join').post(controller.join)
router.route('/:telegram/codelabs').get(controller.userCodelabs)
router.route('/ranking').get(controller.ranking)

export default router
