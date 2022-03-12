//
//      Makes requests to the db 
//

import { Router } from 'express';
const router = Router();
import  getAllUsers, {getUserByName} from '../controllers/usersControllers.js';

//@desc     GET all users from db
//@route    GET /api/users/
//@access   Public
router.get('/',getAllUsers)

//@desc     GET all articles within type from db
//@route    GET /api/users/:name
//@access   Public
router.get('/users/:name',getUserByName)

export default router;