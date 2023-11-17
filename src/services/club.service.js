const model = require('../models');
const partnerSchema = require('./validations/schemas');
const newObjectReturn = require('../utils');

const getAllPartners = async () => {
  const allPartners = await model.getAllPartners();
  return newObjectReturn(null, allPartners, 200);
};

const getPartnerById = async (id) => {
  const partnerById = await model.getPartnerById(id);
  if (!partnerById) {
    return newObjectReturn('error', 'Partner Not Found', 404);
  }
  return newObjectReturn(null, partnerById, 200);
};

const createPartner = async (partner) => {
  const validatePartner = partnerSchema.validate(partner);
  if (validatePartner.error) {
    return newObjectReturn('error', validatePartner.error.details[0].message, 422);
  }
  const insertIdPartner = await model.createPartner(partner);

  return newObjectReturn(null, `Sócio inserido com sucesso no id: ${insertIdPartner}`, 201);
};

const updatePartner = async (id, partner) => {
  const partnerExists = await model.getPartnerById(id);
  if (!partnerExists) {
    return newObjectReturn('error', 'Partner Not Found', 404);
  }
  const validatePartner = partnerSchema.validate(partner);
  if (validatePartner.error) {
    return newObjectReturn('error', validatePartner.error.details[0].message, 422);
  }
  await model.updatePartner(id, partner);

  return newObjectReturn(null, 'Sócio atualizado com sucesso', 200);
};

const deletePartner = async (id) => {
  const partnerExists = await model.getPartnerById(id);
  if (!partnerExists) {
    return newObjectReturn('error', 'Partner Not Found', 404);
  }

  await model.deletePartner(id);
  return newObjectReturn(null, 'Sócio deletado com sucesso', 200);
};

module.exports = {
  getAllPartners,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner,
};
