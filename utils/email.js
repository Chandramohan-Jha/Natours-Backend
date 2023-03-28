const nodemailer = require('nodemailer');

const sendEmail = async (option) => {
  // 1. Create a transporter
  const transporter = nodemailer.createTransport({
    // service: 'Gmail',
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // Activate in gmail less secure app option
  });

  // 2. Define a email option
  const mailOption = {
    from: 'Chandramohan Jha <hello@mohan.io>',
    to: option.email,
    subject: option.subject,
    text: option.message,
  };
  // 3. Finally send the email
  await transporter.sendMail(mailOption);
};

module.exports = sendEmail;
