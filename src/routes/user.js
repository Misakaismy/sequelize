import {Router} from 'express';
import controller from '../controllers/user.js'

const router = Router();

// router.use('/', (req,res)=>{
//     res.status(200).json({message:'Hi'});
// });

router.get('/searchUser', controller.getuser);
router.post('/addUser', controller.postuser);
router.post('/destoryUser', controller.destroyuser);
router.post('/updateUser', controller.updateuser);

//or
/*
router.get('/', controller.getuser);
router.post('/', controller.postuser);
router.delete('/', controller.destroyuser);
router.patch('/', controller.updateuser);
*/


export default router;