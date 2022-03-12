//
//      Makes requests to the db 
//

import { Router } from 'express';
const coursesRouter = Router();
import  getAllCourses from '../controllers/coursesControllers.js';

coursesRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//@desc     GET all courses from db
//@route    GET /api/articles/courses
//@access   Public
coursesRouter.get('/',getAllCourses)

export default coursesRouter;