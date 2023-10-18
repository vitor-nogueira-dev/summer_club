const connection = require('../db/connection');

const getAllPartners = async () => {
  const [result] = await connection.execute('SELECT * FROM summer_club.partners');
  return result;
};

module.exports = {
  getAllPartners,
};
