const Simple = require('../../models/users/simple.js');

module.exports = (app) => {
  app.put('/simple/:id', (req, res) => {
    Simple.update({ _id: req.params.id }, req.body, {}, (err) => {
      if (err) {
        res.status(400).json({});
      } else {
        res.status(200).json({});
      }
    });
  });
};
