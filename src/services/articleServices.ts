import Articleschema from '../model/articleModel';
import { articleInterface, filterInterface } from '../interface/Interfaces';
import mongoose from 'mongoose';
import { ObjectId } from 'mongoose';
import { ParsedQs } from 'qs';
import { log } from 'console';

const ObjectId = mongoose.Types.ObjectId;

// create Article :-

const creatarticle = async (id: string, obj: articleInterface) => {
  const article = await Articleschema.create({
    title: obj.title,
    article: obj.article,
    author: id,
    date: obj.date,
    categories: obj.categories,
  });

  return article;
};

// update Article :-

const updateArticle = async function (user: any, obj: articleInterface) {
  const Id = user._id.toString();

  if (Id == obj.author) {
    const update = await Articleschema.findOneAndUpdate(
      { _id: obj.articleId },
      {
        $set: {
          title: obj.title,
          article: obj.article,
          date: obj.date,
          categories: obj.categories,
        },
      }
    );

    return update;
  } else {
    throw new Error('User id is not correct');
  }
};

interface getAllArticleInterface {
  field: string;
  sortDirection: number;
}

//get All Article

const getAllArticle = async (
  sortobj: getAllArticleInterface,
  query: ParsedQs
) => {
  let sort = {};
  const field: string = sortobj.field;
  const sortDirection: number = sortobj.sortDirection;
  let { search, page, limit } = query;

  sort = { createdAt: -1 };
  if (field) {
    sort = { [field]: sortDirection };
  }

  const columns = ['categories', 'title'];

  let filterQuery: filterInterface = {};
  let or: { [x: string]: { $regex: string; $options: string } }[] = [];

  if (typeof search == 'string') {
    const searchString = search.trim();

    columns.forEach((col) => {
      or.push({ [col]: { $regex: `.*${searchString}.*`, $options: 'i' } });
    });
    filterQuery.$or = or;
  }

  const aggregateQuery = Articleschema.aggregate([
    { $match: filterQuery },

    {
      $lookup: {
        from: 'users',
        localField: 'author',
        foreignField: '_id',
        as: 'user',
      },
    },
    { $unwind: '$user' },

    {
      $project: {
        _id: 0,
        title: {
          $toLower: '$title',
        },
        article: '$article',
        author: '$user.name',
        date: '$date',
        categories: '$categories',
      },
    },
    { $sort: sort },
    // { $limit: parseInt(limit) },
    // { $skip: parseInt(page) },
  ]);
  console.log(aggregateQuery);

  const options: object = {
    search,
    page,
    limit,
  };

  const response = await Articleschema.aggregatePaginate(
    aggregateQuery,
    options
  )
    .then((result) => result)
    .catch((err: Error) => console.log(err));
  console.log(response);
  return response;
};

// get Article:-

const getArticle = async (id: string) => {
  const find = await Articleschema.aggregate([
    { $match: { _id: new ObjectId(id) } },
    {
      $lookup: {
        from: 'users',
        localField: 'author',
        foreignField: '_id',
        as: 'user',
      },
    },
    { $unwind: '$user' },

    {
      $project: {
        title: 1,
        article: 1,
        author: '$user.name',
        date: 1,
        categories: 1,
      },
    },
  ]);

  return find;
};

// get Article by categories :-

const getByCategory = async (category: string) => {
  const find = await Articleschema.aggregate([
    { $match: { categories: category } },
    {
      $lookup: {
        from: 'users',
        localField: 'author',
        foreignField: '_id',
        as: 'user',
      },
    },
    { $unwind: '$user' },
    { $limit: 3 },
    {
      $project: {
        title: 1,
        article: 1,
        author: '$user.name',
        date: 1,
        categories: 1,
      },
    },
  ]);

  return find;
};

// delete Article :-

const deleteArticle = async (
  user: any,
  ids: { userId: string; articleId: string }
) => {
  const Id = user._id.toString();

  if (Id == ids.userId) {
    const deletearticle = await Articleschema.findOneAndDelete({
      _id: ids.articleId,
    });
    return deletearticle;
  } else {
    throw new Error('User id is not correct');
  }
};

export {
  creatarticle,
  updateArticle,
  getArticle,
  deleteArticle,
  getByCategory,
  getAllArticle,
};
