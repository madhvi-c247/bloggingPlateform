import Userschema from '../model/userModel';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
interface userInterface {
  name: string;
  email: string;
  password: string;
  age: number;
  number: number;
}
interface loginInterface {
  email: string;
  password: string;
}

//create user :-

const creatUser = async (obj: userInterface) => {
  try {
    await Userschema.create({
      name: obj.name,
      email: obj.email,
      password: (obj.password = await bcrypt.hash(obj.password, 10)),
      age: obj.age,
      number: obj.number,
    });
    return 'user created';
  } catch (error) {
    console.log(error);
  }
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
    console.log(error);
  }
};

// update User :-

const updateUser = async function (obj: userInterface, id: String) {
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

// get User:-

const retrievingUser = async (
  authUser: loginInterface
): Promise<userInterface | null> => {
  console.log(authUser);
  const getUser: userInterface | null = await Userschema.findOne({
    email: authUser.email,
  });
  return getUser;
};

// delete user :-

const deleteUser = async (id: String) => {
  const find = await Userschema.findByIdAndDelete(id);
  console.log(find);
  return 'Deleted';
};

export { creatUser, updateUser, retrievingUser, deleteUser, login };
