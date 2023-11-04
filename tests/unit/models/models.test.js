const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/db/connection');
const model = require('../../../src/models');
const mocks = require('../../mocks/mocks');

describe('Testando camada de Model', () => {
  it('Testando get partner by id', async () => {
    // arrange
    sinon.stub(connection, 'execute').resolves([[mocks.getPartnerById]])
    // act
    const result = await model.getPartnerById(2)
    // assert
    expect(result).to.be.deep.equal(mocks.getPartnerById)
    expect(result).to.be.an('object')
  })
});
