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

describe('Teste de integração [GET, POST, PUT, DELETE]', () => {
  it.only('Testando rota get all partners', async () => {
    // arrange
    sinon.stub(service, 'getAllPartners').resolves({ type: null, message: mocks.getAllPartners, status: 200 });
    // act
    const response = await chai.request(app).get('/club/partners');
    // assert
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(mocks.getAllPartners);
  });
});
