import Articleschema from '../model/articleModel';

interface reqObj {
  // id:String
  article: string;
  date: Date;
  
}
const creatarticle = async (obj: reqObj) => {
  await Articleschema.create({
    // id:obj.id,
    article:obj.article,
    date:obj.date
  });
  console.log(obj);
  return 'article created';
};

const updateArticle = () => {
  //user Creat in db
  return 'user updated';
};
export { creatarticle,updateArticle };
