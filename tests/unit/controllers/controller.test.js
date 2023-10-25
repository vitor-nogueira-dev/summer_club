const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mocks = require('../../mocks/mocks');
const service = require('../../../src/services');
const controller = require('../../../src/controllers');

chai.use(sinonChai);

const { expect } = chai;

describe('Testando camada de controller', () => {
  it('Testando get all partners', async () => {
    // arrange
    const req = {};
    const res = {};

    res.status = sinon.stub().returnsThis();
    res.json = sinon.stub();

    sinon.stub(service, 'getAllPartners').resolves({ type: null, message: mocks.getAllPartners, status: 200 });
    // act
    await controller.getAllPartners(req, res);
    // assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mocks.getAllPartners);
  });
});
