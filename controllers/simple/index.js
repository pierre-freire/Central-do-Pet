const Simple = require('../../models/users/simple.js');

module.exports = (app) => {
  app.get('/simple', (req, res) => {
    const page = req.query.page || 1;
    Simple.find({}).limit(20).skip((page - 1) * 20).exec((err, simples) => {
      if (err) return res.status(500).send();
      return res.status(200).json(simples);
    });
  });
};
