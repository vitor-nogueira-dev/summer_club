const service = require('../services');

const getAllPartners = async (req, res) => {
  const { message, status } = await service.getAllPartners();
  return res.status(status).json(message);
};

module.exports = {
  getAllPartners,
};
