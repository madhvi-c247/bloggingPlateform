import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',

  auth: {
    user: 'xyz@gmail.com',
    pass: 'xyz',
  },
});

async function newmail(email: string) {
  try {
    const info = await transporter.sendMail({
      from: 'madhvi.s@chapter247.com',
      to: email,
      subject: 'Confirmation mail',

      text: 'Please confirm, you want to delete your account  confirm=`http://localhost:3000/v1/user/verifyAndDeleteAccount`',
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error(error);
  }
}

export default newmail;
