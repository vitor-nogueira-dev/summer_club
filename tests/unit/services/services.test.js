const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models');
const mocks = require('../../mocks/mocks');
const service = require('../../../src/services');

describe('Testando a camada de serviço', () => {
  it('Testando update partner', async () => {
    // arrange
    sinon.stub(model, 'getPartnerById').resolves([[mocks.getPartnerById]]);
    sinon.stub(model, 'updatePartner').resolves([{ affectedRows: 1 }]);
    // act
    const result = await service.updatePartner(1, mocks.updatePartner);
    // assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal('Sócio atualizado com sucesso');
    expect(result.status).to.be.equal(200);
  });
});
