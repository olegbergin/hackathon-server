const Event = require('./models/Event')

class eventController {
    async postEvent(req, res) {
        try {
            const { image, name, description, date } = req.body
            const event = new Event({ image, name, description, date })
            await event.save()
            return res.json({ message: "Event posted successfully" })
        } catch (e) {
            console.log(e);
        }
    }
    async getEvents(req, res) {
        try {
            const events = await Event.find()
            res.json(events)
        } catch (e) {
            console.log(e);
        }
    }
}
module.exports = new eventController()