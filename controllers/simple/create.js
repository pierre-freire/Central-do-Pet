const Simple = require('../../models/users/simple.js');

module.exports = (app) => {
  app.post('/simple', (req, res) => {
    const simple = new Simple(req.body);
    simple.save((err, result) => {
      if (err) return res.status(500).send('Não foi possível cadastrar o usuário!');
      return res.status(200).json({ id: result._id });
    });
  });
};
