const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      debug: true,
      secureConnection: false,
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    // const mailOptions = {
    //   from: "StudyNotion || Absar",
    //   to: `${email}`,
    //   subject: `${title}`,
    //   html: `${body}`,
    // };

    // transporter.sendMail(mailOptions, (err, result) => {
    //   if (err) {
    //     console.log(err);
    //     res.json("Opps error occured");
    //   } else {
    //     res.json("thanks for e-mailing me");
    //   }
    // });

    // console.log("Mail sent");
    // // console.log(mailOptions);
    // return mailOptions;

    let info = await transporter.sendMail({
      from: "StudyNotion || Absar",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log("mail sent");
    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
