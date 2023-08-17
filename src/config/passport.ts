import passport from 'passport';
import passportJWT from 'passport-jwt';
import userModel from '../model/userModel';

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const opts: any = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'ZXCVBNM';

export default passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    const user = await userModel.findOne({ email: jwt_payload.email });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
    
  })
);
