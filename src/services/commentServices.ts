import Commentschema from '../model/commentModel';
import { commentInterface, paging, userreq } from '../interface/Interfaces';
import mongoose from 'mongoose';
import { ObjectId } from 'mongoose';
import Redis from 'ioredis';
const redisclient = new Redis();
const ObjectId = mongoose.Types.ObjectId;

// create Comment :-

const createComment = async (user: any, obj: commentInterface) => {
  const loginId = user._id!.toString();
  {
    const created = await Commentschema.create({
      userId: loginId,
      articleId: obj.articleId,
      comment: obj.comment,
      date: obj.date,
    });
    return created;
  }

  //
};

// update comment :-

const updateComment = async function (user: any, obj: commentInterface) {
  const Id = user._id.toString();

  if (Id == obj.userId) {
    const update = await Commentschema.findOneAndUpdate(
      { _id: obj.commentId },
      {
        $set: {
          comment: obj.comment,
        },
      }
    );

    return update;
  } else {
    throw new Error('User id is not correct');
  }
};

// delete Comment :-

const deleteComment = async (user: any, obj: commentInterface) => {
  const Id = user._id.toString();

  if (Id == obj.userId) {
    const deletecomment = await Commentschema.findOneAndDelete({
      _id: obj.commentId,
    });
    return deletecomment;
  } else {
    throw new Error('User id is not correct');
  }
};

const getComment = async (pagination: paging) => {
  let { id, page, limit } = pagination;
  const cachedData = await redisclient.get(
    `allcomments?page${page}?limit${limit}`
  );
  if (cachedData) {
    return JSON.parse(cachedData);
  } else {
    const aggregateQuery = Commentschema.aggregate([
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
          _id: 0,
          article: '$article_name.article',
          name: '$user.name',
          comment: 1,
        },
      },
    ]);

    const options: object = { id, page, limit };
    const response = await Commentschema.aggregatePaginate(
      aggregateQuery,
      options
    )
      .then((result) => result)
      .catch((err: Error) => console.log(err));
    redisclient.set(
      `allcomments?page${page}?limit${limit}`,
      JSON.stringify(response)
    );
    return response;
  }
};
// get comment by populate :-
// const getComment = async (id:string) => {
//   const find = await Commentschema.find({ articleId: id}).populate(
//     'articleId',
//     'article'
//   ).populate("userId",'name').populate("comment","date");
//   console.log(find);
//   return find;
// };

export { createComment, updateComment, getComment, deleteComment };
