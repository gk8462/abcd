/**
 * @fileoverview Provider register Unit test flow
 * @access no token required
 */

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = require('chai').should(),
    faker = require('faker'),
    app = require('../../testServer');

chai.use(chaiHttp);

describe('Provider Register basic test - API exist', ()=>{
    it('Check if the Provider registration exist - API should not return 404', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .end((err, res)=> {
                res.should.have.status(422);
                done();
            })
    })
})

describe('Provider register validation unit test', ()=> {
    it('A provider should not be able to register with out sending a valid name', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: '',
                password: 'Jithin3433!',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                
                country: faker.address.country(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid name *name length', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: 'd',
                password: 'Jithin3433!',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.address.country(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid password', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: '',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.address.country(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid password *RegEx ', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: '232323',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.address.country(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid email ', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithinwe32!',
                email: '',
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.address.country(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid email *RegEx ', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: 'jihte',
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.address.country(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid Phonenumber ', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: faker.internet.email(),
                mobileNumber: '',
                country: faker.address.country(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid phonenumber *RegEx ', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: faker.internet.email(),
                mobileNumber: '34344',
                country: faker.address.country(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid Organization name ', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: 'jihte',
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.address.country(),
                OrganizationName: '',
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid country', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: '',
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid organization address', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.company.companyName(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: '',
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid organization register number', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.company.companyName(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: '',
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid organization Idtype number', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.company.companyName(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: '',
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid organization service type', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.company.companyName(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: '',
                providerIdentityImg: faker.image.dataUri(),
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid organization Register image', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.company.companyName(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: '',
                partnerType: 'CA(Certified)',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid organization partner type', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.company.companyName(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: '',
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid organization partner type regEx', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.company.companyName(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: faker.name.title(),
                role: 2
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })

    it('A provider should not be able to register with out sending a valid role', (done)=> {
        chai.request(app)
            .post('/api/auth/provider/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                password: 'Jithin233!',
                email: faker.internet.email(),
                mobileNumber: faker.phone.phoneNumber(),
                country: faker.company.companyName(),
                OrganizationName: faker.company.companyName(),
                OrganizationAddress: faker.address.streetName(),
                OrganizationRegNumber: faker.random.alphaNumeric(),
                idType: faker.random.alphaNumeric(),
                servicesOffered: faker.random.arrayElement(),
                providerIdentityImg: faker.image.dataUri(),
                partnerType: faker.name.title(),
                role: ''
            })
            .end((err, res)=> {
                chai.assert.equal(res.status, 422);
                done();
            })
    })
})