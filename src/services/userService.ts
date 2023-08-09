import Userschema from '../model/userModel';

interface reqObj {
  name: string;
  email: string;
  password: string;
  age: number;
  number: number;
}
const creatUser = async (obj: reqObj) => {
  await Userschema.create({
    name: obj.name,
    email: obj.email,
    password: obj.password,
    age: obj.age,
    number: obj.number,
  });
  console.log(obj);
  return 'user created';
};

const updateUser = async function (obj:reqObj,id:String) {

  console.log(obj, id);
  
   await Userschema.findByIdAndUpdate(id, {
    $set: {
      name: obj.name,
      email: obj.email,
      password: obj.password,
      age: obj.age,
      number: obj.number,
    },
  });
      console.log('updating');
  
};

const retrievingUser = async (id: String) => {
  const find = await Userschema.findById(id);
  console.log(find);
  return 'find';
};

export { creatUser, updateUser, retrievingUser };
