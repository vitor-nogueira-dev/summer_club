const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/db/connection');
const model = require('../../../src/models');

describe('Testando camada de Model', () => {
  it('Testando delete partner', async () => {
    // arrange
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    // act
    const result = await model.deletePartner(1);
    // assert
    expect(result).to.be.equal(1);
    expect(result).to.be.an('number');
  });
});
