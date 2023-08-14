import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongoose';
const Articleschema = new Schema({
  //   userId: {
  //      type: mongoose.Schema.Types.ObjectId,
  //      ref: 'Users'
  //   },
  title: {
    type: String,
    // required: true,
  },
  article: {
    type: String,
  },
  author: {
    type: String,
  },
  date: {
    type: String,
    // required: true,
  },
  categories: {
    type: [],
  },
  comment: {
    type: [],
  },
});
export default mongoose.model('Article', Articleschema);
