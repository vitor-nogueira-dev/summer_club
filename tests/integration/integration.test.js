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
  it.only('Testando update partner', async () => {
    // arrange
    sinon.stub(service, 'updatePartner').resolves({
      type: null,
      message: 'Sócio atualizado com sucesso',
      status: 200,
    });
    // act
    const response = await chai
      .request(app)
      .patch('/club/partners/1')
      .send(mocks.updatePartner);
    // assert
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({
      message: 'Sócio atualizado com sucesso',
    });
  });
});
