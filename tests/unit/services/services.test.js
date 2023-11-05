const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models');
const mocks = require('../../mocks/mocks');
const service = require('../../../src/services');

describe('Testando a camada de serviço', () => {
  it('Testando create partner', async () => {
    // arrange
    sinon.stub(model, 'createPartner').resolves(1);
    // act
    const result = await service.createPartner(mocks.insertPartner);
    // assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal('Sócio inserido com sucesso no id: 1');
    expect(result.status).to.be.equal(200);
  });
});
