import Userschema from '../model/userModel';
import Jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import {
  userInterface,
  loginInterface,
  paging,
  userreq,
} from '../interface/Interfaces';
import { agent } from 'supertest';
import mongoose from 'mongoose';

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
      return res.status(401).json({ message: 'User not found' });
    }

    const passwordMatch =  user.validatePassword(
      loginObj.password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Password incorrect' });
    }

    const token =  Jwt.sign({ email: user.email, name: user.name,age:user.age,id:user.id,number:user.number}, 'ZXCVBNM', {
      expiresIn: '1h',
    });
    res.json({ message: 'Logged in sucessful', token });
  } catch (error) {
   return res.status(401).json({message :"invalid details"})
  }}
// update User :-

const updateUser = async function (
  user: userreq,
  obj: userInterface,
  id: string
) {
  const loginUserId = user._id!.toString();
  if (loginUserId == id) {
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
  } else {
    throw new Error('User id is not correct');
  }
};

// get User:-

const getUser = async (
  authUser: loginInterface
): Promise<userInterface | null> => {
  const getUser: userInterface | null = await Userschema.findOne({
    email: authUser.email,
  });

  return getUser;
};

//all user get (Admin)

const getAllUser = async (pagination: paging) => {
  let { limit, page } = pagination;

  const aggregateQuery = Userschema.aggregate([
    {
      $project: {
        _id: 0,
        name: '$name',
        email: '$email',
        age: '$age',
        number: '$number',
        role: '$role',
      },
    },
  ]);
  const options: object = {
    page,
    limit,
  };

  const response = await Userschema.aggregatePaginate(aggregateQuery, options)
    .then((result) => result)
    .catch((err: Error) => console.log(err));

  return response;
};

// delete user :-

const deleteUser = async (user: userreq, id: string) => {
  const Id = user._id!.toString();

  if (Id == id) {
    const deleted = await Userschema.findOneAndDelete({ _id: id });
    return deleted;
  } else {
    throw new Error('User id is not correct');
  }
};

export { creatUser, updateUser, getUser, deleteUser, login, getAllUser }
