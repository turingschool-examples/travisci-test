const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const {app, database} = require('../server');

chai.use(chaiHttp);

describe('Client Routes', () => {
  it('should return the homepage with text', done => {
    chai.request(app)
    .get('/')
    .end((err, response) => {
      response.should.have.status(200);
      response.should.be.html;
      response.res.text.should.equal('Hello travis CI.');
      done()
    });
  });
});

describe('API Routes', () => {
  beforeEach(done => {
    database.migrate.rollback()
    .then(() => {
      database.migrate.latest()
      .then(() => {
        return database.seed.run()
          .then(() => {
            done();
          })
      });
    });
  });

  describe('GET /api/v1/penguins', done => {
    it('should return all of the penguins', () => {
      chai.request(app)
      .get('/api/v1/penguins')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(4);
        response.body[0].should.have.property('species');
        done();
      });
    });
  });
});