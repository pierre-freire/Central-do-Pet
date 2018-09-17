const Ccz = require('../../models/users/cczs');

module.exports = (app) => {
  app.put('/ccz/:id', (req, res) => {
    Ccz.update({ _id: req.params.id }, req.body, {}, (err) => {
      if (err) {
        res.status(400).json({});
      } else {
        res.status(200).json({});
      }
    });
  });
};
