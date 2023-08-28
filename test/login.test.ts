// import request from 'supertest';
// import { expect } from 'chai';
// import dotenv from 'dotenv';
// dotenv.config();
// import { versions } from '../src/helper/constant';
// import app from '../index';

// // create login dummy data
// const loginDetails = { email: 'madhvi@gmail.com', password: 'madhvi' };

// let token; //save token

// describe('Authentication', () => {
//   it('user can not login if user email and password will be wrong', (done) => {
//     request
//       .agent(app)
//       .post(`/${versions}/user`)
//       .send({ email: 'someone', password: 'a' })
//       .expect(401)
//       .then((res) => {
//         expect(res.body.error).to.equal('wrong email id or password');
//         done();
//       })
//       .catch((err) => done(err));
//   });

//   it('if email and password are correct so they will give us token', (done) => {
//     request
//       .agent(app)
//       .post(`/${versions}/user`)
//       .send(loginDetails)
//       .expect(200)
//       .then((res) => {
//         expect(res.body.data).to.have.property('token');
//         token = res.body.data.token;
//         done();
//       })
//       .catch((err) => done(err));
//   });
// });

import { expect } from 'chai';

// Code you want to test
function add(a: number, b: number): number {
  return a + b;
}

// Test suite
describe('add function', () => {
  it('should return the sum of two numbers', () => {
    const result = add(2, 3);
    expect(result).to.equal(5); // Using the 'expect' assertion style
  });

  it('should return zero when adding zero to any number', () => {
    const result = add(10, 0);
    expect(result).to.equal(10);
  });

  it('should return a negative sum when adding a negative number', () => {
    const result = add(5, -3);
    expect(result).to.equal(2);
  });
});
