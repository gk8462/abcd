/**
 * @fileoverview Unit test for getting the common data from server.
 * @access no token required
 */

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = require('chai').should(),
    faker = require('faker'),
    app = require('../../testServer');

chai.use(chaiHttp);

describe('Business Categories API test - Basic tests', ()=>{
    it('Check if the API test exist - API should return 200 on successful hit', (done)=> {
        chai.request(app)
            .get('/api/common/business')
            .set('Content-Type', 'applicatio/json')
            .end((err, res)=> {
                res.should.have.status(200);
                done();
            })
    })
})

describe('Countries Categories API tests', ()=> {
    it('Upon hitting this API the server should respond with 200', (done)=> {
        chai.request(app)
            .get('/api/common/countries')
            .set('Content-Type', 'applicatio/json')
            .end((err, res)=> {
                res.should.have.status(200);
                done();
            })
    })
})

describe('services Categories API tests', ()=> {
    it('Upon hitting this API the server should respond with 200', (done)=> {
        chai.request(app)
            .get('/api/common/services')
            .set('Content-Type', 'applicatio/json')
            .end((err, res)=> {
                res.should.have.status(200);
                done();
            })
    })
})
