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
  it.only('Testando create partner', async () => {
    // arrange
    sinon.stub(service, 'createPartner').resolves({
      type: null,
      message: 'Sócio inserido com sucesso no id: 1',
      status: 200,
    });
    // act
    const response = await chai
      .request(app)
      .post('/club/partners')
      .send(mocks.insertPartner);
    // assert
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({
      message: 'Sócio inserido com sucesso no id: 1',
    });
  });
});
