var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.PASSWORD,
  },
});

var mailOptions = {
  from: process.env.FROM_EMAIL,
  to: process.env.TO_EMAIL,
  subject: "Yêu cầu thuê xe trên Carathon",
  text: "That was easy!",
};

module.exports = function sendMail(payload) {
  transporter.sendMail(
    {
      ...mailOptions,
      text: Object.keys(payload)
        .map((key) => `${key}: ${payload[key]}`)
        .join(" \n"),
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
};
