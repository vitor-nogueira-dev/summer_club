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

const createPartner = async (req, res) => {
  const partner = req.body;
  const { type, message, status } = await service.createPartner(partner);
  if (type) {
    return res.status(status).json({ message });
  }
  return res.status(status).json({ message });
};

const updatePartner = async (req, res) => {
  const { id } = req.params;
  const partner = req.body;

  const { type, message, status } = await service.updatePartner(id, partner);
  if (type) {
    return res.status(status).json({ message });
  }
  return res.status(status).json({ message });
};

const deletePartner = async (req, res) => {
  const { id } = req.params;
  const { type, message, status } = await service.deletePartner(id);
  if (type) {
    return res.status(status).json({ message });
  }
  return res.status(status).json({ message });
};

module.exports = {
  getAllPartners,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner,
};
