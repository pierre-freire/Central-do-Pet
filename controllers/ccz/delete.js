const Ccz = require('../../models/users/cczs.js');

module.exports = (app) => {
  app.delete('/ccz/:id', (req, res) => {
    Ccz.remove({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).send('Não foi possível deletar o usuário!');
      } else {
        res.send('Usuário deletado com sucesso!');
      }
    });
  });
};
