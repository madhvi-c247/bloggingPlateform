import mongoose, { Schema } from 'mongoose';

const Commentschema = new Schema({
  //   userId: {
  //      type: mongoose.Schema.Types.ObjectId,
  //      ref: 'Users'
  //   },
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
export default mongoose.model('Comment', Commentschema);
