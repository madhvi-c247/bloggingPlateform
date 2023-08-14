import Articleschema from '../model/articleModel';
import Userschema from '../model/userModel';
import Commentschema from '../model/commentModel';

interface reqObj {
  // id:String
  title: string;
  article: string;
  author: string;
  date: Date;
  comment: [];
  categories: [];
}

const creatarticle = async (id: String, obj: reqObj) => {
  let user: any = await Userschema.findById(id);
  const username = user.name;
  // console.log(user.name);

  await Articleschema.create({
    // id:obj.id,
    title: obj.title,
    article: obj.article,
    author: username,
    date: obj.date,
    categories: obj.categories,
    comment: obj.comment,
  });
  // console.log(obj);
  return 'article created';
};

const getComment = async function (id: String, id1: String) {
  let commentcollection: any = await Commentschema.findById(id);
  const usercom = commentcollection.comment;
  const date = commentcollection.date;
  const Uname = commentcollection.userName;

  console.log(Uname);

  const abc = await Articleschema.findByIdAndUpdate(id1, {
    $push: {
      comment: { userName: Uname, userComment: usercom, date: date },
    },
  });
  console.log(abc);
};

const updateArticle = async function (obj: reqObj, id: String) {
  console.log(obj, id);

  await Articleschema.findByIdAndUpdate(id, {
    $set: {
      title: obj.title,
      date: obj.date,
    },
  });
  console.log('updating');
};

const retrievingArticle = async (id: String) => {
  const find = await Articleschema.findById(id);
  console.log(find);
  return 'find';
};

const category: String = '';

const retrievingByCategory = async () => {
  if (category) {
    const find = await Articleschema.find({ categories: '' });
    console.log(find);
    return 'find';
  } else {
    const find = await Articleschema.find({});
    // console.log(find);
  }
};

const deleteArticle = async (id: String) => {
  const find = await Articleschema.findByIdAndDelete(id);
  console.log(find);
  return 'Deleted';
};

export {
  creatarticle,
  updateArticle,
  retrievingArticle,
  deleteArticle,
  retrievingByCategory,
  getComment,
};
