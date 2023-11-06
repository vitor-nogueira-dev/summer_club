const getAllPartners = [
  {
    id: 1,
    name: 'Fulano de Tal',
    age: 25,
    matricula: 12345678,
    email: 'fulanodetal@gmail.com',
    frequent: 1,
  },
  {
    id: 2,
    name: 'Ciclano da Silva',
    age: 30,
    matricula: 76543218,
    email: 'ciclanodasilva@hotmail.com',
    frequent: 0,
  },
  {
    id: 3,
    name: 'Beltrano dos Santos',
    age: 22,
    matricula: 98765438,
    email: 'beltranodossantos@yahoo.com',
    frequent: 1,
  },
  {
    id: 4,
    name: 'José Pereira',
    age: 40,
    matricula: 55544478,
    email: 'josepereira@gmail.com',
    frequent: 0,
  },
];

const getPartnerById = {
  id: 2,
  name: 'João Silva',
  age: 30,
  matricula: 76543218,
  email: 'joao_silva@gmail.com',
  frequent: 0,
};

const insertPartner = {
  name: 'Ricardo Silva',
  age: 30,
  matricula: '76543218',
  email: 'ricardo_silva@gmail.com',
  frequent: false,
};

const updatePartner = {
  name: 'Lucas Silva',
  age: 30,
};

module.exports = {
  getAllPartners,
  getPartnerById,
  insertPartner,
  updatePartner,
};
