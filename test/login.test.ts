import request from 'supertest';
import { populate } from '../fakeDB/fakeDB';
import { versions } from '../src/helper/constant';
import app from '../index';
import { dummyConnection } from '../src/config/db';
import {expect }from 'chai';
import mongoose from 'mongoose';

import { ObjectId } from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;
before(async function () {
  dummyConnection();
  populate();
});



const loginDetails = { email: "pooja@gmail.com", password: 'pooja' };
let token:string;
let UserId:ObjectId
// let id:;



// dummy create User---------------------------------------

describe('Usercreate',()=>{
  it('we can not create user ', (done: any) => {
    request
      .agent(app)
      .post(`/${versions}/user/createUser`)
      .send({ name: '', email: '',password:'',age: '', number: '',role: '' })
      .expect(401)

      .then(
        (res)=>{
          expect(res.body.error)
          done()
        }
        )
      .catch((err) => done(err));
  });

let data;

  it('Details are valid so you can create user', (done: any) => {
   
    request
      .agent(app)
      .post(`/${versions}/user/createUser`)
      .send({ name: 'pooja', email: 'pooja@gmail.com',password:'pooja',age: '21', number: '454676723',role: 'admin'})
      .expect(200)
      .then((res)=>{
        // console.log(res.body)
        expect(res.body.data);
        data=res.body.data
         UserId=res.body._id
        done()
      })
      .catch( (err)=>{
        done(err)
        
      });
  });
})

// create login dummy data--------------------------------------------------------

describe('Authentication', () => {
  // it('user can not login if user email and password will be wrong', (done: any) => {
  //   request
  //     .agent(app)
  //     .post(`/${versions}/user/login`)
  //     .send({ email: 'someone', password: 'a' })
  //     .expect(500)

  //     .then(
  //       (res)=>{
  //         expect(res.body.error)
  //         done()
  //       }
  //       )
  //     .catch((err) =>{
  //       console.log("ye error hai",err)
  //       done(err)
  //     }
  //     );
  // });

it('email and password are correct so they will give us token', (done: any) => {
   
    request
      .agent(app)
      .post(`/${versions}/user/login`)
      .send(loginDetails)
      .expect(200)
    
      .then((res)=>{
        // console.log(res.body);
        expect(res.body.token);
        token = res.body.token;
        done();
      })
      .catch( (err)=>{
      
        done(err)
        
      });
  });
});

// update user-----------------------------------------------------

// const updateDetails = { age:28 };

// describe ('UserUpdate',()=>{
// it('update user', (done: any) => {
//     request
//       .agent(app)
//       .put(`/${versions}/user/updateUser/${UserId}`)
//       .send(updateDetails)
//       .set('Authorization',`Bearer ${token}`)
//       .expect(200)
       
//       .then(
//         (res)=>{
//           expect(res.body.message)
//           done()
//         }
//         )
//       .catch((err) => done(err));
//   });

// })

//get all user-------------------------------------------------

describe ('GetAllUsers',()=>{
it('get user', (done: any) => {
    request
      .agent(app)
      .get(`/${versions}/user/getAllUser`)
       .send({limit:2,page:1})
      .set('Authorization',`Bearer ${token}`)
      .expect(200)
       
      .then(
        (res)=>{
          expect(res.body.message)
          done()
        }
        )
      .catch((err) => done(err));
  });

})

// get By Id--------------------------------------------------------

describe ('GetById',()=>{
it('get user', (done: any) => {
    request
      .agent(app)
      .get(`/${versions}/user/getUser`)
      .send(loginDetails.email)
      .set('Authorization',`Bearer ${token}`)
      .expect(200)
       
      .then(
        (res)=>{
          expect(res.body.message)
          done()
        }
        )
      .catch((err) => done(err));
  });

})


// dummy delete user-------------------------------------------------

// describe ('Userdelete',()=>{
// it('delete user', (done: any) => {
//     request
//       .agent(app)
//       .delete(`/${versions}/user/deleteUser/${UserId}`)
     
//       .set('Authorization',`Bearer ${token}`)
//       .expect(200)
       
//       .then(
//         (res)=>{
//           expect(res.body.message)
//           done()
//         }
//         )
//       .catch((err) => done(err));
//   });

// })