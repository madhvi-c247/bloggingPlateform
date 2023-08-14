import mongoose, { Schema } from 'mongoose';

const categoriesschema = new Schema({
  categoryName: {
    type: String,
  },
  categoryDate: {
    type: String,
  },
});
export default mongoose.model('categories', categoriesschema);
