import Commentschema from '../model/commentModel';
import Articleschema from '../model/articleModel';
interface reqObj {
  // id:String
  comment: string;
  title: string;
  username: string;
}
const createComment = async (obj: reqObj) => {
  console.log(obj);
  await Commentschema.create({
    // id:obj.id,
    title: obj.title,
    Username: obj.username,
    comment: obj.comment,
  });
  return 'Comment created';
};

// const insertComment = async function (obj: reqObj, id: String) {
//   console.log(obj, id);

//   await Commentschema.insertMany(id, {
//     $set: {
//       comment: obj.comment,
//     },
//   });
//   console.log('updating');
// };
const insertComment = async function (obj: reqObj, id: String) {
  try {
    await Commentschema.insertMany([
      { comment: obj.comment },
      { comment: obj.comment },
      { comment: obj.comment },
    ]);
  } catch (e) {
    console.log(e);
  }
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
  insertComment,
};
