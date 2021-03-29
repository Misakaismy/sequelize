import passport from 'passport';
import LocalStrategy from 'passport-local';
import userServer from '../servers/user_function'

passport.use('local' ,new LocalStrategy({
    usernameField:'email',
    },
    (async(email, password, done)=>{
        const user = await userServer.getuser(email);
        if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
          }
        // if (!user.validPassword(password)){
        //     return done(null,false,{message:'密碼錯誤!'})
        // }
        return done(null, user);
    }
)));

export default passport;