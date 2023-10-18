const service = require('../services');

const getAllPartners = async (req, res) => {
  const { message, status } = await service.getAllPartners();
  return res.status(status).json(message);
};

const getPartnerById = async (req, res) => {
  const { id } = req.params;
  const { type, message, status } = await service.getPartnerById(id);
  if (type) {
    return res.status(status).json({ message });
  }
  return res.status(status).json(message);
};

module.exports = {
  getAllPartners,
  getPartnerById,
};
