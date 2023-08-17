enum roles {
  normal = 'normal',
  admin = 'admin',
}

interface userInterface {
  name: string;
  email: string;
  password: string;
  age: number;
  number: number;
  role: roles;
}

export default userInterface;
