const Animal = require('../../models/animals.js');

module.exports = (app) => {
  app.delete('/animal/:id', (req, res) => {
    Animal.remove({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).send('Não foi possível deletar o animal!');
      } else {
        res.send('Animal deletado com sucesso!');
      }
    });
  });
};
