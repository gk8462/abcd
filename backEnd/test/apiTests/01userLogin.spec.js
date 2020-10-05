/**
 * @desc Unit test for User login API.
 * @access no token required
 */

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = require('chai').should(),
    faker = require('faker'),
    app = require('../../testServer');

chai.use(chaiHttp);

describe('User login API test - Basic test', ()=> {
    it('Check if the User login api exist - API should return 422 on success hit', (done)=> {
        chai.request(app)
            .post('/api/auth/login')
            .end((err, res)=> {
                chai.assert.notEqual(res.status, 404)
            done();
        })
    })
})

describe('User Login API validation test', ()=> {
    it('User should not be able login using invalid email', (done)=> {
        chai.request(app)
            .post('/api/auth/login')
            .set('Content-Type', 'application/json')
            .send({
                email: "223",
                password: "sdfff"
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422)
            done();
        })
    })
    it('User should not be able to login using invalid password', (done)=> {
        chai.request(app)
            .post('/api/auth/login')
            .set('Content-Type', 'application/json')
            .send({
                email: faker.internet.email(),
                password: "Jithin2323!"
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422)
            done();
        })
    })
    it("User should not be able to logon without registering his account", (done)=> {
        chai.request(app)
            .post('/api/auth/login')
            .set('Content-Type', 'application/json')
            .send({
                email: faker.internet.email(),
                password: "Jithin2323!"
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422)
            done();
        })
    })
})

describe('Unit test for user login user - Success flow', ()=> {
    let email = faker.internet.email(),
        password = "Jithin2332!";
    before('*** Running User register before this test******', (done)=>{
        chai.request(app)
            .post('/api/auth/register')
            .set('Content-Type', 'application/json')
            .send({
                name: faker.name.firstName() + " " + faker.name.lastName(),
                email: email,
                password: password,
                phone_number: faker.phone.phoneNumber()
            }).end((err, res)=> {
                chai.assert.equal(res.status, 201);
                done();
        })
    })

    it('User should be able to login with the registerd user', (done)=> {
        chai.request(app)
            .post('/api/auth/login')
            .set('Content-Type', 'application/json')
            .send({
                email: email,
                password: password,
                role: 1
            }).end((err, res)=> {
                chai.assert.equal(res.status, 200);
                done();
        })
    })
})