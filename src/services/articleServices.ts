import Articleschema from '../model/articleModel';
import articleInterface from '../interface/articleInterface';
import mongoose from 'mongoose';
import { ObjectId } from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

// create Article :-

const creatarticle = async (id: string, obj: articleInterface) => {
  const article = await Articleschema.create({
    // id:obj.id,
    title: obj.title,
    article: obj.article,
    author: id,
    date: obj.date,
    categories: obj.categories,
  });
  // console.log(obj);
  return article;
};

// update Article :-

const updateArticle = async function (obj: articleInterface, id: string) {
  const update = await Articleschema.findByIdAndUpdate(id, {
    $set: {
      title: obj.title,
      article: obj.article,
      author: obj.author,
      date: obj.date,
      categories: obj.categories,
    },
  });
  console.log('updating');
  return update;
};

//get All Article

const getAllArticle = async () => {
  const find = await Articleschema.aggregate([
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
  console.log(find);
  return find;
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
  console.log(find);
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
  console.log(find);
  return find;
};

// delete Article :-

const deleteArticle = async (id: string) => {
  const deleteArticle = await Articleschema.findByIdAndDelete(id);

  return deleteArticle;
};

export {
  creatarticle,
  updateArticle,
  getArticle,
  deleteArticle,
  getByCategory,
  getAllArticle,
};
