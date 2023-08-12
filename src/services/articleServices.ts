import Articleschema from '../model/articleModel';
import Userschema from '../model/userModel';
import Commentschema from '../model/commentModel';

interface reqObj {
  // id:String
  title: string;
  author: string;
  date: Date;
  comment: string;
  usercomment: string;
  comdate: string;
}

const creatarticle = async (id: String, obj: reqObj) => {
  let user: any = await Userschema.findById(id);
  const username = user.name;
  // console.log(user.name);

  await Articleschema.create({
    // id:obj.id,
    title: obj.title,
    author: username,
    date: obj.date,
    // comment: obj.comment,
  });
  // console.log(obj);
  return 'article created';
};

const getComment = async function (id: String) {
  let commentcollection: any = await Commentschema.findById(id);
  const usercom = commentcollection.comment;
  const date = commentcollection.date;
  const Uname = commentcollection.name;

  console.log(usercom, date, Uname);
  await Articleschema.findByIdAndUpdate(id, {
    comment: [Uname, usercom, date],
  });
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
  getComment,
};
