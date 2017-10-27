const app = require('../app');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

describe('Route', () => {
  it('should get / ', function(done) {
    request(app).get('/')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
