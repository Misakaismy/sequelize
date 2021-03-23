// 必須知道model 才有辦法執行SQL指令
import models from '../models/index';

const {users} = models;

class UserController{
    getuser = async (req, res)=>{
        const {email} = req.query;
        const user = await users.findOne({
            email
        })
        res.status(200).json({user});
    }

    postuser = async (req, res)=>{
        const {body} = req;
        const {email, password} = body;
        const user = await users.create({
            email,
            password,
        })
        // console.log(user);
        res.status(200).json({user});
    } 
}

export default new UserController();