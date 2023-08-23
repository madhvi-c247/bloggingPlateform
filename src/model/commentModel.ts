import mongoose, { Schema } from 'mongoose';
import { commentInterface } from '../interface/Interfaces';

const Commentschema = new Schema<commentInterface>({
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model<commentInterface>('Comment', Commentschema);
