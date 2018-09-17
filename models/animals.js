const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Animal = mongoose.model('Animal', {
  name: String,
  avatar: String,
  age: String,
  size: String,
  species: String,
  color: String,
  castrated: Boolean,
  dewormed: Boolean,
  microchip: Boolean,
});

module.exports = Animal;
/* animal: nome (se houver), idade (filhote, adolescente, adulto ou idoso), porte
(mini/toy, pequeno/anão, médio, grande ou gigante), espécie (gato ou cachorro), 
cor dos pelos (para cães: cinza,preto, branco, caramelo, preto e branco, caramelo e branco,
caramelo e preto, tricolor ou pintas; para gatos: cinza, preto, branco, laranja,
preto e branco, laranja rajado com branco, cinza rajado com branco, tricolor ou siamês),
castrado, vermifugado, microchipagem, descrição do comportamento e foto */