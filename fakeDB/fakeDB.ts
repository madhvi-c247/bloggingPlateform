import data from './data';
import Userschema from '../src/model/userModel';

export const populate = async () => {
  await Userschema.deleteMany({});

  await Userschema.create(data.user);
};
