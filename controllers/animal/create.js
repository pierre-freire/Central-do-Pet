const Animal = require('../../models/animals.js');

module.exports = (app) => {
  app.post('/animal', (req, res) => {
    const animal = new Animal(req.body);
    animal.save((err, result) => {
      if (err) return res.status(500).send('Não foi possível cadastrar a loja!');
      return res.status(200).json({ id: result._id });
    });
  });
};
