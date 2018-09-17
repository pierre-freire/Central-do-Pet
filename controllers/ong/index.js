const Ong = require('../../models/users/ongs');

module.exports = (app) => {
  app.get('/ong', (req, res) => {
    const page = req.query.page || 1;
    Ong.find({}).limit(20).skip((page - 1) * 20).exec((err, ongs) => {
      if (err) return res.status(500).send();
      return res.status(200).json(ongs);
    });
  });
};
