import mongoose, { Schema, AggregatePaginateModel } from 'mongoose';
import { commentInterface } from '../interface/Interfaces';
import mongoosePaginate from 'mongoose-aggregate-paginate-v2';

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

Commentschema.plugin(mongoosePaginate);

export default mongoose.model<
  commentInterface,
  AggregatePaginateModel<commentInterface>
>('Comment', Commentschema);
