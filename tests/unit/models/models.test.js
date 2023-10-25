const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/db/connection');
const model = require('../../../src/models');
const mocks = require('../../mocks/mocks');

describe('Testando camada de Model', () => {
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
});
