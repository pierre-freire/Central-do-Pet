const Event = require('../../models/events.js');

module.exports = (app) => {
  app.post('/event', (req, res) => {
    const event = new Event(req.body);
    event.save((err, result) => {
      if (err) return res.status(500).send('Não foi possível cadastrar o evento!');
      return res.status(200).json({ id: result._id });
    });
  });
};
