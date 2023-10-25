const model = require('../models');
const partnerSchema = require('./validations/schemas');

// modelo de retorno da service
// { type: null | 'error' , message: data, status: statusCode}

const getAllPartners = async () => {
  const allPartners = await model.getAllPartners();
  return { type: null, message: allPartners, status: 200 };
};

const getPartnerById = async (id) => {
  const partnerById = await model.getPartnerById(id);
  if (!partnerById) {
    return { type: 'error', message: 'Partner Not Found', status: 404 };
  }
  return { type: null, message: partnerById, status: 200 };
};

const createPartner = async (partner) => {
  const validatePartner = partnerSchema.validate(partner);
  if (validatePartner.error) {
    return {
      type: 'error',
      message: validatePartner.error.details[0].message,
      status: 422,
    };
  }
  const insertIdPartner = await model.createPartner(partner);

  return {
    type: null,
    message: `Sócio inserido com sucesso no id: ${insertIdPartner}`,
    status: 200,
  };
};

const updatePartner = async (id, partner) => {
  const partnerExists = await model.getPartnerById(id);
  if (!partnerExists) {
    return { type: 'error', message: 'Partner Not Found', status: 404 };
  }
  const validatePartner = partnerSchema.validate(partner);
  if (validatePartner.error) {
    return {
      type: 'error',
      message: validatePartner.error.details[0].message,
      status: 422,
    };
  }
  await model.updatePartner(id, partner);

  return {
    type: null,
    message: 'Sócio atualizado com sucesso',
    status: 200,
  };
};

module.exports = {
  getAllPartners,
  getPartnerById,
  createPartner,
  updatePartner,
};
