const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Ong = mongoose.model('Ong', {
  name: String,
  socialName: String,
  avatar: String,
  state: String,
  city: String,
  district: String,
  cep: Number,
  street: String,
  number: String,
  phone: Number,
  email: String,  
  cnpj: Number,
  maxCapacity: Number,
  currentCapacity: Number,
});

module.exports = Ong;