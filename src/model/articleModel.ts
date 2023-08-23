import mongoose, { Schema } from 'mongoose';
import { articleInterface } from '../interface/Interfaces';
import mongoosePaginate from 'mongoose-aggregate-paginate-v2';
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
    type: Date,
    default: Date.now,
  },
  categories: {
    type: String,
    enum: ['GK', 'IT', 'Sports', 'AI', 'Thought'],
    default: 'GK',
  },
});
Articleschema.plugin(mongoosePaginate);

export default mongoose.model<articleInterface>('Article', Articleschema);
