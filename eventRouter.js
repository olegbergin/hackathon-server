const Router = require('express')
const router = new Router()
const controller = require('./eventController')
// const roleMiddleware = require('./middlewares/roleMiddleware')
const authMiddleware = require('./middlewares/authMiddleware')


router.post('/events', authMiddleware, controller.postEvent)

router.get('/events', authMiddleware, controller.getEvents)

module.exports = router