const Ong = require('../../models/users/ongs.js');

module.exports = (app) => {
  app.delete('/ong/:id', (req, res) => {
    Ong.remove({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).send('Não foi possível deletar o usuário!');
      } else {
        res.send('Usuário deletado com sucesso!');
      }
    });
  });
};
