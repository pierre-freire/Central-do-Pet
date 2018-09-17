const Event = require('../../models/events.js');

module.exports = (app) => {
  app.put('/event/:id', (req, res) => {
    Event.update({ _id: req.params.id }, req.body, {}, (err) => {
      if (err) {
        res.status(400).json({});
      } else {
        res.status(200).json({});
      }
    });
  });
};
