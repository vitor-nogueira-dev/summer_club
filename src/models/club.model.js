const connection = require('../db/connection');

const getAllPartners = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM summer_club.partners',
  );
  return result;
};

const getPartnerById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM summer_club.partners WHERE id = ?',
    [id],
  );
  return result;
};

const createPartner = async (partner) => {
  const {
    name, age, email, matricula, frequent,
  } = partner;
  const [{ insertId }] = await connection.execute(
    'INSERT INTO summer_club.partners (name, age, email, matricula, frequent) VALUES (?, ?, ?, ?, ?)',
    [name, age, email, matricula, frequent],
  );
  return insertId;
};

module.exports = {
  getAllPartners,
  getPartnerById,
  createPartner,
};
