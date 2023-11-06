const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const service = require('../../../src/services');
const controller = require('../../../src/controllers');

chai.use(sinonChai);

const { expect } = chai;

describe('Testando camada de controller', () => {
  it('Testando delete partner', async () => {
    // arrange
    const res = {};
    const req = {
      params: { id: 1 },
    };
    res.status = sinon.stub().returnsThis();
    res.json = sinon.stub();

    sinon.stub(service, 'deletePartner').resolves({
      type: null,
      message: 'Sócio deletado com sucesso',
      status: 200,
    });
    // act
    await controller.deletePartner(req, res);
    // assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({
      message: 'Sócio deletado com sucesso',
    });
  });
});
