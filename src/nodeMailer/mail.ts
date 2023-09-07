import nodemailer from 'nodemailer';
import { email_password } from '../config/env';
const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {

    user: 'xyz@gmail.com',
    pass: 'xyz',

  },
});
// var transport = nodemailer.createTransport({
//   host: 'sandbox.smtp.mailtrap.io',
//   port: 2525,
//   auth: {
//     user: 'e5d4573b0b01a3',
//     pass: '723522395ab00d',
//   },
// });
async function newmail(email: string, token: string) {
  const path = 'http://localhost:3000/v1/user/verifyAndDeleteAccount';
  try {
    const info = await transport.sendMail({
      from: 'madhvi.s@chapter247.com',
      to: email,
      subject: 'Confirmation mail',

      html: `Please confirm, you want to delete your account <a href='http://localhost:3000/v1/user/verifyAndDeleteAccount?token=${token}'>click here to confirm</a>`,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error(error);
  }
}


export default newmail;
