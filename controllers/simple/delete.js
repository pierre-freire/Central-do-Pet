const Simple = require('../../models/users/simple.js');

module.exports = (app) => {
  app.delete('/simple/:id', (req, res) => {
    Simple.remove({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).send('Não foi possível deletar o usuário!');
      } else {
        res.send('Usuário deletado com sucesso!');
      }
    });
  });
};
