const Ong = require('../../models/users/ongs.js');

module.exports = (app) => {
  app.post('/ong', (req, res) => {
    const ong = new Ong(req.body);
    ong.save((err, result) => {
      if (err) return res.status(500).send('Não foi possível cadastrar o usuário!');
      return res.status(200).json({ id: result._id });
    });
  });
};
