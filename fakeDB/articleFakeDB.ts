import data from './data';
import Articleschema from '../src/model/articleModel';

export const articlepopulate = async () => {
  await Articleschema.deleteMany({});

  await Articleschema.create(data.article);
};
