const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models');
const mocks = require('../../mocks/mocks');
const service = require('../../../src/services');

describe('Testando a camada de serviço', () => {
  it('Testando delete partner', async () => {
    // arrange
    sinon.stub(model, 'getPartnerById').resolves(mocks.getPartnerById);
    sinon.stub(model, 'deletePartner').resolves(1);
    // act
    const result = await service.deletePartner(1);
    // assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal('Sócio deletado com sucesso');
    expect(result.status).to.be.equal(200);
  });
});
