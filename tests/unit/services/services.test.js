const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models');
const mocks = require('../../mocks/mocks');
const service = require('../../../src/services');

describe('Testando a camada de serviço', () => {
  it('Testando get partner by id', async () => {
    // arrange
    sinon.stub(model, 'getPartnerById').resolves(mocks.getPartnerById)
    // act
    const result = await service.getPartnerById(2)
    // assert
    expect(result.type).to.be.equal(null)
    expect(result.message).to.be.deep.equal(mocks.getPartnerById)
  });
});
