const joi = require('joi');

const parterSchema = joi.object({
  name: joi.string().optional(), // string
  age: joi.number().integer().min(18).optional(), // number - maior de idade
  matricula: joi.string().length(8).pattern(/^\d+$/).optional(), // string com 8 caracteres
  email: joi.string().email().optional(), // email válido
  frequent: joi.boolean().optional(), // booleano
}).min(1);

module.exports = parterSchema;
