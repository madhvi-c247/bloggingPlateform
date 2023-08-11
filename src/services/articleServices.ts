import Articleschema from '../model/articleModel';


interface reqObj {
  // id:String
  title: string;
  author: string;
  date: Date;
  comment: string;
}
const creatarticle = async (obj: reqObj) => {
  await Articleschema.create({
    // id:obj.id,
    article: obj.title,
    author: obj.author,
    date: obj.date,
    comment: obj.comment,
  });
  console.log(obj);
  return 'article created';
};

const updateArticle = async function (obj: reqObj, id: String) {
  console.log(obj, id);

  await Articleschema.findByIdAndUpdate(id, {
    $set: {
      article: obj.title,
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

export { creatarticle, updateArticle, retrievingArticle, deleteArticle };
