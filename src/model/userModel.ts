import mongoose, { Schema, AggregatePaginateModel } from 'mongoose';
import { userInterface } from '../interface/Interfaces';
import bcrypt from 'bcrypt';
import { error } from 'console';
import mongoosePaginate from 'mongoose-aggregate-paginate-v2';
const Userschema = new Schema<userInterface>({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
  },

  age: {
    type: Number,
    required: true,
  },

  number: {
    type: Number,
    required: true,
  },

  role: {
    type: String,
    enum: ['normal', 'admin'],
    default: 'normal',
  },
});

Userschema.pre(['save'], function (next) {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

Userschema.pre(['findOneAndUpdate'], function (next) {
  let update: any = { ...this.getUpdate() };

  if (update.password) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }

      bcrypt.hash(update.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }

        update.password = hash;
        this.setUpdate(update);
        next();
      });
    });
  } else {
    next();
  }
});

Userschema.methods.validatePassword = async function (
  candidatePassword: string,
  user: string
) {
  return await bcrypt.compare(candidatePassword, user);
};

Userschema.plugin(mongoosePaginate);

export default mongoose.model<
  userInterface,
  AggregatePaginateModel<userInterface>
>('User', Userschema);
