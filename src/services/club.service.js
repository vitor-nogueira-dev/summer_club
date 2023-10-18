const model = require('../models');

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

module.exports = {
  getAllPartners,
  getPartnerById,
};
