import mongoose, { Schema } from 'mongoose';

const Commentschema = new Schema({
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
export default mongoose.model('Comment', Commentschema);
