import Commentschema from '../model/commentModel';
import commentInterface from '../interface/commentInterface';
import mongoose from 'mongoose';
import { ObjectId } from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

// create Comment :-

const createComment = async (obj: commentInterface) => {
  await Commentschema.create({
    userId: obj.userId,
    articleId: obj.articleId,
    comment: obj.comment,
    date: obj.date,
  });
  return 'Comment created';
};

// update comment :-

const updateComment = async function (obj: commentInterface, id: string) {
  const update = await Commentschema.findByIdAndUpdate(id, {
    $set: {
      comment: obj.comment,
    },
  });
  return update;
};

// delete Comment :-

const deleteComment = async (id: string) => {
  const deletecomment = await Commentschema.findByIdAndDelete(id);

  return deletecomment;
};

// get comments by article id

const getComment = async (id: string) => {
  console.log('found', id);
  const find = await Commentschema.aggregate([
    { $match: { articleId: new ObjectId(id) } },

    // Article id
    {
      $lookup: {
        from: 'articles',
        localField: 'articleId', // in which feild we want details
        foreignField: '_id', // from where you get id
        as: 'article_name',
      },
    },
    { $unwind: '$article_name' },

    //user id
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
      },
    },
    { $unwind: '$user' },

    {
      $project: {
        article: '$article_name.article',
        name: '$user.name',
        comment: 1,
      },
    },
  ]);
  console.log('article comment ', find);
  return find;
};
// const getComment = async (id: String) => {
//   const find = await Commentschema.findOne({ _id: id }).populate('articles');
//   console.log(find);
//   return find;
// };

export { createComment, updateComment, getComment, deleteComment };
