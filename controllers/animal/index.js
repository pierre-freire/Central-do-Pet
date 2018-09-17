const Animal = require('../../models/animals.js');

module.exports = (app) => {
  app.get('/animal', (req, res) => {
    const page = req.query.page || 1;
    Animal.find({}).limit(20).skip((page - 1) * 20).exec((err, animals) => {
      if (err) return res.status(500).send();
      return res.status(200).json(animals);
    });
  });
};
