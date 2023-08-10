import Articleschema from '../model/articleModel';
import Userschema from '../model/articleModel';

interface reqObj {
  // id:String
  article: string;
  date: Date;
}
const creatarticle = async (obj: reqObj) => {
  await Articleschema.create({
    // id:obj.id,
    article: obj.article,
    date: obj.date,
  });
  console.log(obj);
  return 'article created';
};

const updateArticle = async function (obj: reqObj, id: String) {
  console.log(obj, id);

  await Userschema.findByIdAndUpdate(id, {
    $set: {
      article: obj.article,
      date: obj.date,
    },
  });
  console.log('updating');
};

const retrievingArticle = async (id: String) => {
  const find = await Userschema.findById(id);
  console.log(find);
  return 'find';
};
export { creatarticle, updateArticle, retrievingArticle };
