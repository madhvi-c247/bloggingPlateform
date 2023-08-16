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
  categories: String;
}

// create Article :-

const creatarticle = async (id: String, obj: reqObj) => {
  let user: any = await Userschema.findById(id);
  const username = user.name;
  
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

// get comment :-

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

// update Article :-

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

// get Article:-

const retrievingArticle = async (id: String) => {
  const find = await Articleschema.findById(id);
  console.log(find);
  return 'find';
};

// get Article by categories :-

const retrievingByCategory = async (category: String) => {
  const find = await Articleschema.find({ categories: category });
  if (find) {
    console.log(find);
  } else {
    console.log('Not found ');
  }
  return 'find';
};

// delete Article :-

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
