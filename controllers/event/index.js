const Event = require('../../models/events.js');

module.exports = (app) => {
  app.get('/event', (req, res) => {
    const page = req.query.page || 1;
    Event.find({}).limit(20).skip((page - 1) * 20).exec((err, events) => {
      if (err) return res.status(500).send();
      return res.status(200).json(events);
    });
  });
};
