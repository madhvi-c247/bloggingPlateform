import Articleschema from '../model/articleModel';
import Userschema from '../model/userModel';
import Commentschema from '../model/commentModel';
import articleInterface from '../interface/articleInterface';

// create Article :-

const creatarticle = async (id: String, obj: articleInterface) => {
  await Articleschema.create({
    // id:obj.id,
    title: obj.title,
    article: obj.article,
    author: id,
    date: obj.date,
    categories: obj.categories,
  });
  // console.log(obj);
  return 'article created';
};

// update Article :-

const updateArticle = async function (obj: articleInterface, id: String) {
  console.log(obj, id);

  await Articleschema.findByIdAndUpdate(id, {
    $set: {
      title: obj.title,
      article: obj.article,
      author: obj.author,
      date: obj.date,
      categories: obj.categories,
    },
  });
  console.log('updating');
  return 'comment get';
};

//get All Article

const getAllArticle = async () => {
  const find = await Articleschema.find();
  console.log(find);
  return 'All found';
};

// get Article:-

const getArticle = async (id: String) => {
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
  return 'found';
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
  getArticle,
  deleteArticle,
  retrievingByCategory,
  getAllArticle,
};
