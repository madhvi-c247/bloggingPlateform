import Commentschema from '../model/commentModel';
import Articleschema from '../model/articleModel';
import Userschema from '../model/userModel';
interface reqObj {
  title: string;
  username: string;
  comment: string;
  date: string;
  // articleId: object;
}
const createComment = async (obj: reqObj, id: String) => {
  let user: any = await Userschema.findById(id);
  const username = user.name;
  console.log(username);

  let article: any = await Articleschema.findById('64d9ed5b4c24e578327ced07');
  const art = article.title;

  console.log(obj);

  console.log(username);
  await Commentschema.create({
    // id:obj.id,
    title: art,
    userName: username,
    comment: obj.comment,
    date: obj.date,
    // articleId: obj.articleId,
  });
  return 'Comment created';
};



const updateComment = async function (obj: reqObj, id: String) {
  console.log(obj, id);

  await Commentschema.findByIdAndUpdate(id, {
    $set: {
      comment: obj.comment,
    },
  });
  console.log('updating');
};

const retrievingComment = async (id: String) => {
  const find = await Articleschema.findById(id);
  console.log(find);
  return 'find';
};

const deleteComment = async (id: String) => {
  const find = await Commentschema.findByIdAndDelete(id);
  console.log(find);
  return 'Deleted';
};

export {
  createComment,
  updateComment,
  retrievingComment,
  deleteComment,
  // insertComment,
};
