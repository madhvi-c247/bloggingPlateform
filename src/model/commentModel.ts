import mongoose, { Schema } from 'mongoose';

const Commentschema = new Schema({
  //   userId: {
  //      type: mongoose.Schema.Types.ObjectId,
  //      ref: 'Users'
  //   },
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});
export default mongoose.model('Comment', Commentschema);
