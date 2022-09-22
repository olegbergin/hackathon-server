const Router = require('express')
const router = new Router()
const controller = require('./eventController')
const authMiddleware = require('./middlewares/authMiddleware')
// const roleMiddleware = require('./middlewares/roleMiddleware')


router.post('/events', authMiddleware, controller.postEvent)

router.get('/events', authMiddleware, controller.getEvents)

router.post('/social', authMiddleware, controller.postSocial)

router.get('/social', authMiddleware, controller.getSocials)

router.post('/contact', authMiddleware, controller.postContact)

router.get('/contact', authMiddleware, controller.getContacts)

module.exports = router