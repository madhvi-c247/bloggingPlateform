interface articleInterface {
  articleId: String;
  title: string;
  article: string;
  author: object;
  date: Date;
  categories: string;
}

interface commentInterface {
  commentId: string;
  articleId: object;
  userId: object;
  comment: string;
  date: Date;
}

interface loginInterface {
  email: string;
  password: string;
}

interface userInterface {
  name: string;
  email: string;
  password: string;
  age: number;
  number: number;
  role: string;
  validatePassword(candidatePassword: string, user: string): boolean;
}

interface user {
  _id: Object;
  name: string;
  email: string;
  password: string;
  age: number;
  number: number;
  role: string;
}

interface queryInterface {
  search: string;
  page: string;
  limit: string;
}

interface filterInterface {
  $or?: { [x: string]: { $regex: string; $options: string } }[];
}

interface getAllArticleInterface {
  field: string;
  sortDirection: number;
}

interface paging {
  id: string;
  page: number;
  limit: number;
}
export {
  articleInterface,
  commentInterface,
  loginInterface,
  userInterface,
  queryInterface,
  filterInterface,
  getAllArticleInterface,
  paging,
  user,
  // query,
};
