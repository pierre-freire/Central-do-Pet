const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Event = mongoose.model('Event', {
  name: String,
  avatar: String,
  startDate: Date,
  endDate: Date,
  timetable: String,
  state: String,
  city: String,
  street: String,
  number: String,
  type: String,
  description: String,
  servicesOffered: String,
  cost: String,
  phone: Number,
  email: String,
});

module.exports = Event;
/*evento: banner da ação, data (podendo ser mais de um dia), horário,
local, tipo de ação (campanha veterinária, feira de adoção, castração comunitária, campanha
de vacinação), descrição do evento, serviços oferecidos durante o evento (castração, adoção,
microchipagem, vacinação) e custos (de entrada, dos serviços oferecidos, caso haja a
cobrança).*/
