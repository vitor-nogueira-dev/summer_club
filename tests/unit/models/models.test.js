const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/db/connection');
const model = require('../../../src/models');
const mocks = require('../../mocks/mocks');

describe('Testando camada de Model', () => {
  it('Testando update partner', async () => {
    // arrange
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    // act
    const result = await model.updatePartner(1, mocks.updatePartner);
    // assert
    expect(result).to.be.equal(1);
    expect(result).to.be.an('number');
  });
});
