import Articleschema from '../model/articleModel';
import articleInterface from '../interface/articleInterface';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

// create Article :-

const creatarticle = async (id: String, obj: articleInterface) => {
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

const updateArticle = async function (obj: articleInterface, id: String) {
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
  const find = await Articleschema.find();
  console.log(find);
  return find;
};

// get Article:-

const getArticle = async (id: String) => {
  const find = await Articleschema.findById(id);
  console.log(find);
  return find;
};

// get Article by categories :-

const getByCategory = async (category: String) => {
  const find = await Articleschema.find({ categories: category });
  if (find) {
    console.log(find);
  } else {
    console.log('Not found ');
  }
  return find;
};

// delete Article :-

const deleteArticle = async (id: String) => {
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
