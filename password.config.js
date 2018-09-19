const jwt = require('jsonwebtoken');
const Simple = require('./models/users/simple');
const Ong = require('./models/users/ongs.js');
const Ccz = require('./models/users/cczs');
const protect = require('./jwt-protect.js');

module.exports = (app) => {
  app.post('/auth', (req, res) => {
    Simple.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
      if (err) return res.status(500).send();
      if (user) {
        const token = jwt.sign({ email: req.body.email }, 'patoStyle854jhgh9585', {
          expiresIn: '2h' });
        const email = user.email;
        res.json({ token, email });
      } else {
        //return res.status(404).send();
      }
    });
    Ong.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
      if (err) return res.status(500).send();
      if (user) {
        const token = jwt.sign({ email: req.body.email }, 'patoStyle854jhgh9585', {
          expiresIn: '2h' });
        const email = user.email;
        res.json({ token, email });
      } else {
        //return res.status(404).send();
      }
    });
    Ccz.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
      if (err) return res.status(500).send();
      if (user) {
        const token = jwt.sign({ email: req.body.email }, 'patoStyle854jhgh9585', {
          expiresIn: '2h' });
        const email = user.email;
        res.json({ token, email });
      } else {
        //return res.status(404).send();
      }
    });
  });

  app.get('/isAuth', protect, (req, res) => {
    res.status(200).send('Deu certo!');
  });
};
