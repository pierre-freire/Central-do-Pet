const Ccz = require('../../models/users/cczs.js');

module.exports = (app) => {
  app.post('/ccz', (req, res) => {
    const ccz = new Ccz(req.body);
    ccz.save((err, result) => {
      if (err) return res.status(500).send('Não foi possível cadastrar o usuário!');
      return res.status(200).json({ id: result._id });
    });
  });
};
