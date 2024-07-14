const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

describe('Hello World Test', () => {
it('should return Hello, World!', (done) => {
 chai.request('http://localhost:3000')
   .get('/')
   .end((err, res) => {
     expect(res.text).to.equal('Hello, World!');
     done();
   });
});
});