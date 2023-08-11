import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongoose';
const Articleschema = new Schema({
  //   userId: {
  //      type: mongoose.Schema.Types.ObjectId,
  //      ref: 'Users'
  //   },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});
export default mongoose.model('Article', Articleschema);
