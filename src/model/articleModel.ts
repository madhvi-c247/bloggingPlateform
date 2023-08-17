import mongoose, { Schema } from 'mongoose';

const Articleschema = new Schema({
  title: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  date: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    enum: ['GK', 'IT', 'News', 'AI', 'Thought'],
    default: 'GK',
  },
});
export default mongoose.model('Article', Articleschema);
