/**
 * @fileoverview Unit test for getting all the providers
 * @access no token required
 */

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = require('chai').should(),
    faker = require('faker'),
    app = require('../../testServer');

chai.use(chaiHttp);

describe('Unit test for getting all the providers',()=> {
    it('The API should return 200 with providers on successfull hit', (done)=> {
        chai.request(app)
            .get('/api/provider/all')
            .set('Content-Type', 'application/json')
            .end((err, res)=> {
                chai.assert.equal(res.status, 200);
                done();
            })
    })
})