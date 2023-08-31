import mongoose from 'mongoose';

const data = {
  user: [
    {
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
};
export default data;
