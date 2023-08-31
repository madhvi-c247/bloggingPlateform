import request from 'supertest';
import { articlepopulate } from '../fakeDB/articleFakeDB';
import { versions } from '../src/helper/constant';
import app from '../index';
import { dummyConnection } from '../src/config/db';
import {expect }from 'chai';
import mongoose from 'mongoose';
import data from '../fakeDB/data';
import { ObjectId } from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;
before(async function () {
  dummyConnection();
  articlepopulate();
});


let token:string;
let UserId:ObjectId

const loginDetails = { email:'pooja@gmail.com', password: 'pooja' };

// create login dummy data--------------------------------------------------------

describe('Authentication', () => {

it('email and password are correct so they will give us token', (done: any) => {
   
    request
      .agent(app)
      .post(`/${versions}/user/login`)
      .send(loginDetails)
      .expect(200)
    
      .then((res)=>{
        expect(res.body.token);
        token=res.body.token
        console.log("token-----------------------------------",token)
        done()
      })
      .catch( (err)=>{
      
        done(err)
        
      });
  });
});

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
          expect(res.body)
          console.log(res.body._id)
          done()
        }
        )
      .catch((err) => done(err));
  });

})

//create Article


describe('Articlecreate',()=>{
  it('we can not  create article ', (done: any) => {
    request
      .agent(app)
      .post(`/${versions}/article/createArticle`)
      .set('Authorization',`Bearer ${token}`)
      .send({ title: '', article: '',author:'',date: '', categories: '' })
      .expect(404)

      .then(
        (res)=>{
          expect(res.body.error)
          done()
        }
        )
      .catch((err) => done(err));
  });

let data;

  it('we can create article', (done: any) => {
   console.log("userId=---------------",UserId)
    request
      .agent(app)
      .post(`/${versions}/article/articleUser/${UserId}`)
      .set('Authorization',`Bearer ${token}`)
      .send({ title: 'title', article: 'article', categories: 'GK' })
      .expect(200)
      .then((res)=>{
        console.log(res.body)
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
