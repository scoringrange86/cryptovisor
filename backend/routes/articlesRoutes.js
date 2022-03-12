//
//      Makes requests to the db 
//

import { Router } from 'express';
const articlesRouter = Router();
import  getArticlebyId, { getArticlesbyType} from '../controllers/articlesControllers.js';

articlesRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//@desc     GET all articles within type from db
//@route    GET /api/articles/:type
//@access   Public
articlesRouter.get('/:type',getArticlesbyType)

//@desc     GET an article by id from db (type should be known)
//@route    GET /api/products/:type/:id
//@access   Public
articlesRouter.get('/:type/:id', getArticlebyId)

export default articlesRouter; 