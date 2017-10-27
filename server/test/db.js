process.env.NODE_ENV = "test";
const app = require('../app');
const chai = require('chai');

const expect = chai.expect;
const should = require('chai').should();
const request = require('supertest');
const models = require('./../models');

describe('db tests', () => {

  before((done) => {
    models.sequelize
    	.sync({
      		force: true,
      		match: /_test$/,
      		logging: false,
    	})
    	.then(() => {
    	    done()
    	})
  });

  it('db model exists', function (done) {
  	models.should.be.an('object');
  	done();
  });

});
