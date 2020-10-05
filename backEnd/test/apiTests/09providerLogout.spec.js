/**
 * @fileoverview Unit tests for provider logout
 * @access Protected
 */

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = require('chai').should(),
    faker = require('faker'),
    app = require('../../testServer');

chai.use(chaiHttp);

describe('Unit test for provider logout', ()=> {
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
        role=2,
        jwt='';

    before('********Registering new provder', ()=> {
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
                chai.request(app)
                    .post('/api/auth/provider/login')
                    .set('Content-Type', 'application/json')
                    .send({
                        email: email,
                        password: password
                    }).end((err, res)=> {
                        jwt = res.body.token
                        chai.assert.equal(res.status, 200);
                        done();
                    })
        })

        it('User should be able to logout', (successDone)=> {
            chai.request(app)
            .post('/api/auth/provider/login')
            .set('Content-Type', 'application/json')
            .set('x-api-key', jwt)
            .end((err, res)=>{
                chai.assert.equal(res.status, 200);
                successDone();
            })
        })
    })
})