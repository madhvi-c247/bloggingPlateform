import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'madhvi.s@chapter247.com',
    pass: 'madhvi@c247',
  },
});

async function deletemail(email: string) {
  try {
    const info = await transporter.sendMail({
      from: 'madhvi.s@chapter247.com',
      to: email,
      subject: 'Account Deleted',

      text: `Deletetion Successful!!!!`,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error(error);
  }
}

export default deletemail;
