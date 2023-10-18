const model = require('../models');

// modelo de retorno da service
// { type: null | 'error' , message: data, status: statusCode}

const getAllPartners = async () => {
  const allPartners = await model.getAllPartners();
  return { type: null, message: allPartners, status: 200 };
};

module.exports = {
  getAllPartners,
};
