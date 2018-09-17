const Event = require('../../models/events.js');

module.exports = (app) => {
  app.delete('/event/:id', (req, res) => {
    Event.remove({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).send('Não foi possível deletar o animal!');
      } else {
        res.send('Evento deletado com sucesso!');
      }
    });
  });
};
