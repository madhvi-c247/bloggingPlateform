import mongoose, { Schema } from 'mongoose';
import commentInterface from '../interface/commentInterface';

const Commentschema = new Schema<commentInterface>({
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'article',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
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
export default mongoose.model<commentInterface>('Comment', Commentschema);
