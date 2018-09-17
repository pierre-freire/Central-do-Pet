const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Simple = mongoose.model('Simple', {
  name: String,
  avatar: String,
  state: String,
  city: String,
  street: String,
  number: String,
  phone: Number,
  email: String,
});

module.exports = Simple;