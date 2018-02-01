const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

const environment = process.env.NODE_ENV;
const configuration = require('../knexfile')[environment];
const knex = require('knex')(configuration);

chai.use(chaiHttp);

describe('Client Routes', () => {
  it('should return the homepage with text', () => {
    return chai.request(server)
    .get('/')
    .then(response => {
      response.should.have.status(200);
      response.should.be.html;
      response.res.text.should.equal('Hello travis CI.');
    })
    .catch(err => {
      throw err;
    });
  });
});

describe('API Routes', () => {
  beforeEach(() => {
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
      });
    });
  });

  describe('GET /api/v1/penguins', () => {
    it('should return all of the penguins', () => {
      return chai.request(server)
      .get('/api/v1/penguins')
      .then(response => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(4);
        response.body[0].should.have.property('species');
      })
      .catch(err => {
        throw err;
      });
    });
  });
});