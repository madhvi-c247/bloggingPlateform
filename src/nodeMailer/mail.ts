import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'xyz@gmail.com',
    pass: 'xyz',
  },
});

async function newmail(email: string, token: string) {
  const path = 'http://localhost:3000/v1/user/verifyAndDeleteAccount';
  try {
    const info = await transporter.sendMail({
      from: 'madhvi.s@chapter247.com',
      to: email,
      subject: 'Confirmation mail',

      html: `Please confirm, you want to delete your account :- 
      <br><br><br>token for login =<a href=${token}>${token}</a>`,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error(error);
  }
}


export default newmail;
