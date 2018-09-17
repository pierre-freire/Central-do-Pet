const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Ccz = mongoose.model('Ccz', {
  name: String,
  avatar: String,
  state: String,
  city: String,
  district: String,
  cep: Number,
  street: String,
  number: String,
  phone: Number,
  email: String,  
  responsibleEmail: String,
  responsiblePhone: Number,
  requesterEmail: String,
  requesterPhone: Number,
});

module.exports = Ccz;