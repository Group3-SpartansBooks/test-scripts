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