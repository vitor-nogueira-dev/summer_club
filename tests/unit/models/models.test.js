const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/db/connection');
const model = require('../../../src/models');
const mocks = require('../../mocks/mocks');

describe('Testando camada de Model', () => {
  afterEach(() => sinon.restore());
  it('Testando get all partners', async () => {
    // arrange - o que preciso fazer para o meu teste funcionar (mocks, stubs)
    sinon.stub(connection, 'execute').resolves([mocks.getAllPartners]);
    // act - ação de executar a função que eu estou testando
    const result = await model.getAllPartners();
    // assert - verifica se o resultado é o esperado
    expect(result).to.be.deep.equal(mocks.getAllPartners);
    expect(result).to.be.an('array');
    expect(result).to.be.lengthOf(4);
  });
  it('Testando get partner by id', async () => {
    // arrange
    sinon.stub(connection, 'execute').resolves([[mocks.getPartnerById]]);
    // act
    const result = await model.getPartnerById(2);
    // assert
    expect(result).to.be.deep.equal(mocks.getPartnerById);
    expect(result).to.be.an('object');
  });
  it('Testando create partner', async () => {
    // arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    // act
    const result = await model.createPartner(mocks.insertPartner);
    // assert
    expect(result).to.be.equal(1);
    expect(result).to.be.an('number');
  });
  it('Testando update partner', async () => {
    // arrange
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    // act
    const result = await model.updatePartner(1, mocks.updatePartner);
    // assert
    expect(result).to.be.equal(1);
    expect(result).to.be.an('number');
  });
  it('Testando delete partner', async () => {
    // arrange
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    // act
    const result = await model.deletePartner(1);
    // assert
    expect(result).to.be.equal(1);
    expect(result).to.be.an('number');
  });
});
