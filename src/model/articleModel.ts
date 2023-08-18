import mongoose, { Schema } from 'mongoose';
import articleInterface from '../interface/articleInterface';
const Articleschema = new Schema<articleInterface>({
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
export default mongoose.model<articleInterface>('Article', Articleschema);
