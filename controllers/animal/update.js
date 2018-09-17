const Animal = require('../../models/animals.js');

module.exports = (app) => {
  app.put('/animals/:id', (req, res) => {
    Animal.update({ _id: req.params.id }, req.body, {}, (err) => {
      if (err) {
        res.status(400).json({});
      } else {
        res.status(200).json({});
      }
    });
  });
};
