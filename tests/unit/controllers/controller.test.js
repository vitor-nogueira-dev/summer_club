const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mocks = require('../../mocks/mocks');
const service = require('../../../src/services');
const controller = require('../../../src/controllers');

chai.use(sinonChai);

const { expect } = chai;

describe('Testando camada de controller', () => {
  afterEach(() => sinon.restore());

  it('Testando get all partners', async () => {
    // arrange
    const req = {};
    const res = {};

    res.status = sinon.stub().returnsThis();
    res.json = sinon.stub();

    sinon
      .stub(service, 'getAllPartners')
      .resolves({ type: null, message: mocks.getAllPartners, status: 200 });
    // act
    await controller.getAllPartners(req, res);
    // assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mocks.getAllPartners);
  });
  it('Testando get partner by id', async () => {
    // arrange
    const res = {};
    const req = {
      params: {
        id: 2,
      },
    };
    sinon
      .stub(service, 'getPartnerById')
      .resolves({ type: null, message: mocks.getPartnerById, status: 200 });
    // act
    await controller.getPartnerById(req, res);
    // assert
    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.be.calledWith(mocks.getPartnerById);
  });
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
