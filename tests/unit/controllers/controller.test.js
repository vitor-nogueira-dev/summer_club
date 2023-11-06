const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mocks = require('../../mocks/mocks');
const service = require('../../../src/services');
const controller = require('../../../src/controllers');

chai.use(sinonChai);

const { expect } = chai;

describe('Testando camada de controller', () => {
  it('Testando update partner', async () => {
    // arrange
    const res = {};
    const req = {
      params: { id: 1 },
      body: mocks.updatePartner,
    };
    res.status = sinon.stub().returnsThis();
    res.json = sinon.stub();

    sinon.stub(service, 'updatePartner').resolves({
      type: null,
      message: 'Sócio atualizado com sucesso',
      status: 200,
    });
    // act
    await controller.updatePartner(req, res);
    // assert
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith({
      message: 'Sócio atualizado com sucesso',
    });
  });
});
