let chai = require('chai');
chaiHttp = require('chai-http');

chai.use(chaiHttp);
const app = require('../app');


describe('/GET homepage', () => {
    it('it should GET the home page', () => {
        chai.request('http://localhost:3000')
            .get('/')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
            });
    });
});

describe('/login success', () => {
    it('it should login', () => {
        chai.request('http://localhost:3000')
            .post('/login')
            .type('form')
            .send({
                'email': 'vishnu.adda@sjsu.edu',
                'password': 'Password'
            })
            .end((err, res) => {
                chai.expect(res).to.exist;
           });
    })
});

describe('/logout success', () => {
    it('it should logout', () => {
        chai.request('http://localhost:3000')
            .post('/login')
            .type('form')
            .send({
                'email': 'vishnu.adda@sjsu.edu',
                'password': 'Password'
            })
        chai.request('http://localhost:3000')
            .post('/logout')
            .end((err, res) => {
                chai.expect(res).to.not.have.status(500);
            });
    });
});