import mongoose, { Schema } from 'mongoose'
import userInterface from '../interface/userInterface';

const Userschema = new Schema<userInterface>({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
  },

  age: {
    type: Number,
    required: true,
  },

  number: {
    type: Number,
    required: true,
  },

  role: {
    type: String,
    enum: ['normal', 'admin'],
    default: 'normal',
  },
});

export default mongoose.model<userInterface>('User', Userschema);