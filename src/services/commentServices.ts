import Commentschema from '../model/commentModel';
import Articleschema from '../model/articleModel';
import Userschema from '../model/userModel';
import commentInterface from '../interface/commentInterface';
// create Comment :-

const createComment = async (obj: commentInterface) => {
  console.log(obj);

  await Commentschema.create({
    userId: obj.userId,
    articleId: obj.articleId,
    comment: obj.comment,
    date: obj.date,
  });
  return 'Comment created';
};

// update comment :-

const updateComment = async function (obj: commentInterface, id: String) {
  console.log(obj, id);

  await Commentschema.findByIdAndUpdate(id, {
    $set: {
      comment: obj.comment,
    },
  });
  console.log('updating');
};

// delete Comment :-

const deleteComment = async (id: String) => {
  const find = await Commentschema.findByIdAndDelete(id);
  console.log(find);
  return 'Deleted';
};

//get comments by article id

const getComment = async (id: String) => {
  const find = await Commentschema.find({
    articleId: id,
  });
  console.log(find);
  return find;
};

export { createComment, updateComment, getComment, deleteComment };
