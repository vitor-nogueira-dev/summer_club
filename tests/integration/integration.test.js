const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHTTP = require('chai-http');
const mocks = require('../mocks/mocks');
const service = require('../../src/services');

const app = require('../../src/app');

chai.use(sinonChai);
chai.use(chaiHTTP);

const { expect } = chai;

describe.only('Teste de integração [GET, POST, PUT, DELETE]', () => {
  afterEach(() => sinon.restore());
  it.only('Testando rota get all partners', async () => {
    // arrange
    sinon.stub(service, 'getAllPartners').resolves({ type: null, message: mocks.getAllPartners, status: 200 });
    // act
    const response = await chai.request(app).get('/club/partners');
    // assert
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(mocks.getAllPartners);
  it('Testando partner by id', async () => {
    // arrange
    sinon
      .stub(service, 'getPartnerById')
      .resolves({ type: null, message: mocks.getPartnerById, status: 200 });
    // act
    const response = await chai.request(app).get('/club/partners/2');
    // assert
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(mocks.getPartnerById);
  });
  it('Testando se partner by id retorna um erro quando o sócio não existe', async () => {
    // arrange
    sinon
      .stub(service, 'getPartnerById')
      .resolves({ type: 'error', message: 'Partner Not Found', status: 404 });
    // act
    const response = await chai.request(app).get('/club/partners/1000');
    // assert
    expect(response.status).to.be.equal(404);
    expect(response.body).to.be.deep.equal({ message: 'Partner Not Found' });
});
