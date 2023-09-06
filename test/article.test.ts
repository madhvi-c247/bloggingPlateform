import request from 'supertest';
import { articlepopulate } from '../fakeDB/articleFakeDB';
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
  articlepopulate();
  token =  Jwt.sign({ email: loginDetails.email, name:loginDetails.name}, 'ZXCVBNM', {
      expiresIn: '1h',
      algorithm:'HS256'
  });
});

let userId:ObjectId
let articleId:ObjectId

// create Article-------------------------------------------------------

describe('Articlecreate',()=>{
  it('we can not  create article ', (done: any) => {
  console.log("token-------",token)
    request
      .agent(app)
      .post(`/${versions}/article/createArticle`)
      .set('Authorization',`Bearer ${token}`)
      .send({ title: '', article: '',author:'',date: '', categories: '' })
      .expect(404)

      .then(
        (res)=>{
          console.log("------------",res.body)
          expect(res.body.error)
          done()
        }
        )
      .catch((err) => done(err));
  });


let data;

  it('we can create article', (done: any) => {
   
    request
      .agent(app)
      .post(`/${versions}/article/createArticle/64f1bdbccab2a6379ebcefae`)
      .set('Authorization',`Bearer ${token}`)
      .send({ title: 'new title', article: 'new article', categories: 'GK' })
      .expect(200)
      .then((res)=>{
        expect(res.body.data);
        data=res.body.data
        userId=res.body.author
        articleId=res.body._id
        
        console.log("Article id--------",articleId)
        console.log("Article userId--------",userId)
        done()
      })
      .catch( (err)=>{
        done(err)
        
      });
  });
})


//get all user-------------------------------------------------

describe ('GetAllArticle',()=>{
it('get all article', (done: any) => {
    request
      .agent(app)
      .get(`/${versions}/article/getAllArticle?search=GK&page=1&limit=3`)
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