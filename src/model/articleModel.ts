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
  author: {
    type: String,
  },
  date: {
    type: String,
    // required: true,
  },
  comment: {
    type: [String],
  },
});
export default mongoose.model('Article', Articleschema);
