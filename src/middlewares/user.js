import passport from './passport';

class userMiddleware{
    jwtAuthenticate = async (req, res, next)=>{
        passport.authenticate('local', {session:false},async (err, user)=>{
            if(err){
                const {status, message} = err;
                res.status(status).json({message});
                return;
            }
            if(!user){
                return res.status(400).json({message:`找尋不到該用戶!${user}`});
            }
            return res.status(200).json({message:`找尋成功!${user}}`});
        })(req, res, next);
    }
}
export default new userMiddleware();