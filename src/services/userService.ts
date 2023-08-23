import Userschema from '../model/userModel';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import { userInterface, loginInterface } from '../interface/Interfaces';


//create user :-

const creatUser = async (obj: userInterface) => {
  const create = await Userschema.create(obj);
  return create;
};

// Login user :-

const login = async (req: Request, res: Response) => {
  try {
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
  try {
    const result = await Userschema.findByIdAndUpdate(id, {
      name: obj.name,
      email: obj.email,
      password: obj.password,
      age: obj.age,
      number: obj.number,
      role: obj.role,
    });
    return result;
  } catch (error) {
    return error;
  }
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
