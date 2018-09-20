const express = require('express');
const morgan = require('morgan');
const methodOverride  = require('method-override');
const bodyParser = require('body-parser');

const Mongoose = require('mongoose');

const app = express();
app.use(express.static('./central-do-pet/public')); // set the static files location /public
app.use(morgan(':method :url :status - :response-time ms'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: 'true' }));// parse application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: '20mb' }));// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override'));

const db = Mongoose.connection;
db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.log('Conectado ao MongoDB');
});
//  conectando ao banco de dados
const dataBaseUrl = 'mongodb://admin:Yfwyjr46@ds255262.mlab.com:55262/centraldopet';
Mongoose.connect(dataBaseUrl);

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const controllers = require('./controllers/controllers.config.json');

controllers.forEach((c) => {
  require(`./controllers/${c.model}/${c.controller}`)(app);
});


app.get('/teste', (req, res) => {
  res.send('Hello World');
})

const serverPort = process.env.PORT || 8080;
const serverIpAddress = '127.0.0.1';

app.listen(serverPort, serverIpAddress, () => {
  console.log(`Listening on ${serverIpAddress}, server_port ${serverPort}`);
});