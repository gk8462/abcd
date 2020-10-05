/**
 * @fileoverview Provider Login unit test
 * @access no token required
 */

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = require('chai').should(),
    faker = require('faker'),
    app = require('../../testServer');

chai.use(chaiHttp);

describe('Unit test for provider login', ()=> {
    let fullName=faker.name.firstName() + " " + faker.name.lastName(),
        password='Jithin3433!',
        email=faker.internet.email(),
        mobileNumber=faker.phone.phoneNumber(),
        country=faker.address.country(),
        OrganizationName=faker.company.companyName(),
        OrganizationAddress=faker.address.streetName(),
        OrganizationRegNumber=faker.random.alphaNumeric(),
        idType=faker.random.alphaNumeric(),
        servicesOffered=[faker.random.arrayElement()],
        providerIdentityImg=faker.image.dataUri(),
        partnerType='CA(Certified)',
        role=2;
    
    before('*******Registering new provider************', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: fullName,
                password: password,
                email: email,
                mobileNumber: mobileNumber,
                country: country,
                OrganizationName: OrganizationName,
                OrganizationAddress: OrganizationAddress,
                OrganizationRegNumber: OrganizationRegNumber,
                idType: idType,
                servicesOffered: servicesOffered,
                providerIdentityImg: providerIdentityImg,
                partnerType: partnerType,
                role: role
            }).end((err, res)=> {
                chai.assert.equal(res.status, 201)
                done();
            })
        
        it('User should be able to login using existing email and password', (successDone)=> {
            chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                email: email,
                password: password
            })
            .end((err, res)=>{
                chai.assert.equal(res.status, 200);
                logoutDone()
            })
        })

        it('User should not be able to login using non email and password', (successDone)=> {
            chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                email: faker.internet.email(),
                password: password
            })
            .end((err, res)=>{
                chai.assert.equal(res.status, 200);
                logoutDone()
            })
        })
    })
})