import passport from 'passport';
import passportJWT from 'passport-jwt';
import userModel from '../model/userModel';
import { key } from './env';
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const opts: any = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key;

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
