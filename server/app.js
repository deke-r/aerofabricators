const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for port 465
  auth: {
    user: process.env.MAILID,
    pass: process.env.MAILPASS
  }
});

const router = express.Router();

router.get('/', (req, res) => {
  res.send('✅ Aerofabricators Backend Server is up and running successfully. Welcome to the API root endpoint.');
});

router.post('/contact-form-data', async (req, res) => {
  try {
    const { user_name, user_email, user_phone, subject, user_message } = req.body;

    if (!user_name || !user_email || !user_phone || !subject || !user_message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.'
      });
    }

    const recipients = [
      'senseprojects@yahoo.com',
      'senseprojects2019@gmail.com',
      'info@aerofabricators.in'
    ];

    //  const recipients = [
    //   'bhavishya.sense@gmail.com'
    // ];

    

    const mailOptions = {
      // from: process.env.MAILID,
      from: `"Aerofabricators" <${process.env.MAILID}>`,
      to: recipients,
      subject: 'New Contact Form Submission',
      html: `
<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">
  <tbody>
    <tr>
      <td align="center" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="border:1px solid #e4e4e4">
          <tbody>
            <tr>
              <td valign="top">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%">
                  <tbody>
                    <tr>
                      <td valign="top" style="text-align:center;padding-top:20px;padding-bottom:20px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif">
                        <table align="center" border="0" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td style="border-bottom:2px solid #202020">
                                <h1 style="text-align:center;margin:0;font-size:24px;font-weight:bold;color:#202020">
                                  New Contact Form Submission
                                </h1>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p style="margin:10px 0 0 0;color:#666;font-size:14px">Aerofabricators Website</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%">
                  <tbody>
                    <tr>
                      <td valign="top" style="padding-top:30px;padding-right:50px;padding-bottom:30px;padding-left:50px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif">
                        <span style="color:#202020;font-family:helvetica;font-size:15px;line-height:24px">Hello,</span>
                        <br><br>
                        <span style="color:#202020;font-family:helvetica;font-size:15px;line-height:24px">
                          You have received a new message from the contact form. Details are below:
                        </span>
                        <br><br>
                        <table border="0" cellpadding="8" cellspacing="0" width="100%" style="border:1px solid #e4e4e4;border-collapse:collapse">
                          <tbody>
                            <tr style="background-color:#f8f9fa">
                              <td width="30%" style="border:1px solid #e4e4e4;color:#202020;font-size:14px;font-weight:bold">Name</td>
                              <td style="border:1px solid #e4e4e4;color:#202020;font-size:14px">${user_name}</td>
                            </tr>
                            <tr>
                              <td width="30%" style="border:1px solid #e4e4e4;color:#202020;font-size:14px;font-weight:bold">Email</td>
                              <td style="border:1px solid #e4e4e4;color:#202020;font-size:14px">${user_email}</td>
                            </tr>
                            <tr style="background-color:#f8f9fa">
                              <td width="30%" style="border:1px solid #e4e4e4;color:#202020;font-size:14px;font-weight:bold">Phone</td>
                              <td style="border:1px solid #e4e4e4;color:#202020;font-size:14px">${user_phone}</td>
                            </tr>
                            <tr>
                              <td width="30%" style="border:1px solid #e4e4e4;color:#202020;font-size:14px;font-weight:bold">Subject</td>
                              <td style="border:1px solid #e4e4e4;color:#202020;font-size:14px">${subject}</td>
                            </tr>
                            <tr style="background-color:#f8f9fa">
                              <td width="30%" style="border:1px solid #e4e4e4;color:#202020;font-size:14px;font-weight:bold;vertical-align:top">Message</td>
                              <td style="border:1px solid #e4e4e4;color:#202020;font-size:14px;white-space:pre-wrap">${user_message}</td>
                            </tr>
                          </tbody>
                        </table>
                        <br><br>
                        <span style="color:#202020;font-family:helvetica;font-size:15px;line-height:24px">
                          This email was sent automatically from the Aerofabricators website.
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table border="0" cellpadding="0" cellspacing="0" width="600">
                  <tbody>
                    <tr>
                      <td>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%">
                          <tbody>
                            <tr>
                              <td valign="top" style="padding-top:20px;text-align:center;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif">
                                <span style="color:#666;font-family:helvetica;font-size:12px;line-height:18px">
                                  For support, contact us at <a href="mailto:info@aerofabricators.in" target="_blank">info@aerofabricators.in</a>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
      `
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    // Return a success response
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while sending the email. Please try again later.',
      error: error.message
    });
  }
});

app.use('/', router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
