// server/routes/contact.js
const express = require("express");
const router = express.Router();
require("dotenv").config();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email, title, message } = req.body;

  if (!name || !email || !title || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to site admin
    await transporter.sendMail({
      from: `"Sunfoods Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL, // your admin email from .env
      subject: `New Contact Form: ${title}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Optional: Send confirmation email to user
    await transporter.sendMail({
      from: `"Sunfoods" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting Sunfoods",
      html: `<p>Hi ${name},</p><p>Thanks for reaching out! We received your message and will get back soon.</p>`,
    });

    res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Email sending failed" });
  }
});

module.exports = router;
