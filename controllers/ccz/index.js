const Ccz = require('../../models/users/cczs.js');

module.exports = (app) => {
  app.get('/ccz', (req, res) => {
    const page = req.query.page || 1;
    Ccz.find({}).limit(20).skip((page - 1) * 20).exec((err, cczs) => {
      if (err) return res.status(500).send();
      return res.status(200).json(cczs);
    });
  });
};
