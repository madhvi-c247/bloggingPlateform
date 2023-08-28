import mongoose from 'mongoose';
const id = mongoose.Types.ObjectId;
const data = {
  user: [
    {
      _id: id,
      name: 'madhvi',
      email: 'madhvi@gmail.com',
      password: 'madhvi',
      age: 20,
      number: 89898989,
      role: 'normal',
    },
  ],
};
export default data;
