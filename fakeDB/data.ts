import mongoose from 'mongoose';
// const ObjectId=mongoose.Types.ObjectId
const data = {
  user: [
    {
      //  id:ObjectId,
      // _id:new ObjectId(ObjectId.toString()),
      name: 'xyz',
      email: 'xyz@gmail.com',
      password: 'xyz',
      age: 20,
      number: 89898989,
      role: 'normal',
    },
  ],
  article: [
    {
      title: 'title',
      article: 'article',
      author: mongoose.Types.ObjectId,
      categories:'GK'
    },
  ], 
  comment: [
    {
      articleId: mongoose.Types.ObjectId,
      userId: mongoose.Types.ObjectId,
      comment: 'very nice',
    },
  ],
};

export default data;
