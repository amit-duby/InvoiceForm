const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    const transporter = nodeMailer.createTransport({
      //   host: "smtp.example.com",
      //   port: 587,
      service: "gmail",

      secure: false, // true for 465, false for other ports
      auth: {
        user: "damit9963@gmail.com",
        pass: "pdcv zwdc odhr doyf",
      },
    });
    // console.log(transporter);
    const mailOptions = {
      from: "damit9963@gmail.com",
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
