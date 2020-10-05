/**
 * @fileoverview Unit test for searching provider.
 * @access UnAuthorized
 */

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = require('chai').should(),
    faker = require('faker'),
    app = require('../../testServer');

chai.use(chaiHttp);

describe('Unit test for Search provider API', ()=>{
    it('The api should not return 404 status on hitting', (done)=> {
        chai.request(app)
            .post('/api/common/search')
            .set('Content-Type', 'application/json')
            .end((err, res)=> {
                res.should.have.status(200);
                done();
            })
    })
})