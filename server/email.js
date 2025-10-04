require("dotenv").config();
const nodemailer = require("nodemailer");

// 1. Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// 2. Send email function
async function sendEmail(to, subject, text) {
  try {
    let info = await transporter.sendMail({
      from: `"Sunfoods" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text
    });
    console.log("✅ Email sent:", info.messageId);
  } catch (err) {
    console.error("❌ Error sending email:", err);
  }
}

// Example call
sendEmail("prachiburate13@gmail.com", "Test Subject", "Hello, this is a test email!");
