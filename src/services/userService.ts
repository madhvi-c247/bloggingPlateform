import Userschema from '../model/userModel';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
// import { validationResult } from 'express-validator';
import userInterface from '../interface/userInterface';
import loginInterface from '../interface/loginInterface';

//create user :-

const creatUser = async (obj: userInterface) => {
  const create = await Userschema.create({
    name: obj.name,
    email: obj.email,
    password: (obj.password = await bcrypt.hash(obj.password, 10)),
    age: obj.age,
    number: obj.number,
    role: obj.role,
  });
  return create;
};

// Login user :-

const login = async (req: Request, res: Response) => {
  try {
    // const result = validationResult(req);

    // if (!result.isEmpty()) {
    //   return res.send({ errors: result['errors'][0] });
    // }

    const loginObj: loginInterface = req.body;

    const user: userInterface | null = await Userschema.findOne({
      email: loginObj.email,
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(
      loginObj.password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = Jwt.sign({ email: user.email, name: user.name }, 'ZXCVBNM', {
      expiresIn: '1h',
    });

    res.json({ message: 'Logged in sucessful', token });
  } catch (error) {
    return error;
  }
};

// update User :-

const updateUser = async function (obj: userInterface, id: string) {
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

// get User:-

const getUser = async (
  authUser: loginInterface
): Promise<userInterface | null> => {
  console.log(authUser);
  const getUser: userInterface | null = await Userschema.findOne({
    email: authUser.email,
  });
  console.log(getUser);
  return getUser;
};

//all user get (Admin)

const getAllUser = async () => {
  const find = await Userschema.find();
  console.log(find);
  return find;
};

// delete user :-

const deleteUser = async (id: string) => {
  const find = await Userschema.findByIdAndDelete(id);
  console.log(find);
  return 'Deleted';
};

export { creatUser, updateUser, getUser, deleteUser, login, getAllUser };
