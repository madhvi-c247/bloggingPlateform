import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongoose';
const Articleschema = new Schema({
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
    type: String,
    enum: ['GK', 'IT', 'News', 'AI', 'Thought'],
    default: 'GK',
  },
  comment: {
    type: [],
  },
});
export default mongoose.model('Article', Articleschema);
