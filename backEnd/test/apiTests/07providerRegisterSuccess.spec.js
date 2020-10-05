/**
 * @fileoverview Unit test for provider success flow
 * @access no token required
 */

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = require('chai').should(),
    faker = require('faker'),
    app = require('../../testServer');

chai.use(chaiHttp);

describe('Unit test for Provider Register **Success flow**', ()=> {
    it('The user should be able to register successfully as a provider', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin3433!',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.address.country(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: [faker.random.arrayElement()],
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 201);
                done();
            })
    })
})