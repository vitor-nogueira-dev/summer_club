const joi = require('joi');

const parterSchema = joi.object({
  name: joi.string(), // string
  age: joi.number().integer().min(18), // number - maior de idade
  matricula: joi.string().length(8).pattern(/^\d+$/), // string com 8 caracteres
  email: joi.string().email(), // email válido
  frequent: joi.boolean(), // booleano
});

module.exports = parterSchema;
