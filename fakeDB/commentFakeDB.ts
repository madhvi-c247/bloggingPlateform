import data from './data';
import Commentschema from '../src/model/commentModel';

export const commentpopulate = async () => {
  // await Commentschema.deleteMany({});

  await Commentschema.create(data.comment);
  console.log(data.comment)
};
