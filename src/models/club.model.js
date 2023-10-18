const connection = require('../db/connection');

const getAllPartners = async () => {
  const [result] = await connection.execute('SELECT * FROM summer_club.partners');
  return result;
};

const getPartnerById = async (id) => {
  const [[result]] = await connection.execute('SELECT * FROM summer_club.partners WHERE id = ?', [id]);
  return result;
};

module.exports = {
  getAllPartners,
  getPartnerById,
};
