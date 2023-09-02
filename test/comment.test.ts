import request from 'supertest';
import { commentpopulate } from '../fakeDB/commentFakeDB';
import { versions } from '../src/helper/constant';
import app from '../index';
import { dummyConnection } from '../src/config/db';
import {expect }from 'chai';
import mongoose from 'mongoose';
import data from '../fakeDB/data';
import { ObjectId } from 'mongoose';
import  Jwt from 'jsonwebtoken';

const ObjectId = mongoose.Types.ObjectId;

const loginDetails = { email:'xyz@gmail.com', password: 'xyz',name:'xyz' };

let token:string=""
before(async () =>{
   dummyConnection();
  commentpopulate();
  token =  Jwt.sign({ email: loginDetails.email, name:loginDetails.name}, 'ZXCVBNM', {
      expiresIn: '1h',
      algorithm:'HS256'
  });
});

// let userId:ObjectId
// let articleId:ObjectId

// create comment-------------------------------------------------------

describe('Commentcreate',()=>{
let data;

  it('we can create comment', (done: any) => {
   
    request
      .agent(app)
      .post(`/${versions}/comment/createComment`)
      .set('Authorization',`Bearer ${token}`)
      .send({ articleId:'64f1c748b12956631e6c31de',userId:'64f1bdbccab2a6379ebcefae',comment:'good good' })
      .expect(200)
      .then((res)=>{
        console.log(res.body);
        
        expect(res.body.data);
        data=res.body.data
        
        done()
      })
      .catch( (err)=>{
        done(err)
        
      });
  });
})
