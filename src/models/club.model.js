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

const updatePartner = async (id, partner) => {
  const fields = ['name', 'age', 'matricula', 'email', 'frequent'];
  // [[key, value], [key, value]]
  const { setClauses, values } = Object.entries(partner).reduce((acc, [key, value]) => {
    if (fields.includes(key)) {
      acc.setClauses.push(`${key} = ?`);
      acc.values.push(value);
    }
    return acc;
  }, { setClauses: [], values: [] });

  const query = `UPDATE summer_club.partners SET ${setClauses.join(', ')} WHERE id = ?`;

  values.push(id);

  const [{ affectedRows }] = await connection.execute(query, values);

  return affectedRows;
};

module.exports = {
  getAllPartners,
  getPartnerById,
  createPartner,
  updatePartner,
};
