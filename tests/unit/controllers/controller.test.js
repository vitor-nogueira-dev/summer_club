const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mocks = require('../../mocks/mocks');
const service = require('../../../src/services');
const controller = require('../../../src/controllers');

chai.use(sinonChai);

const { expect } = chai;

describe('Testando camada de controller', () => {
  it('Testando create partner', async () => {
    // arrange
    const res = {};
    const req = {
      body: mocks.insertPartner,
    };
    res.status = sinon.stub().returnsThis();
    res.json = sinon.stub();

    sinon.stub(service, 'createPartner').resolves({
      type: null,
      message: 'Sócio inserido com sucesso no id: 1',
      status: 200,
    });
    // req.body = mocks.insertPartner;
    // act
    await controller.createPartner(req, res);
    // assert
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith({
      message: 'Sócio inserido com sucesso no id: 1',
    });
  });
});
