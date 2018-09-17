const Ong = require('../../models/users/ongs.js');

module.exports = (app) => {
  app.put('/ong/:id', (req, res) => {
    Ong.update({ _id: req.params.id }, req.body, {}, (err) => {
      if (err) {
        res.status(400).json({});
      } else {
        res.status(200).json({});
      }
    });
  });
};
