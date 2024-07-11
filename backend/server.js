require('dotenv').config();

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client')));

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, 'data.xlsx');
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

app.get('/api/servers', (req, res) => {
  const filePath = path.join(__dirname, 'uploads', 'data.xlsx');
  if (fs.existsSync(filePath)) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    res.json(jsonData);
  } else {
    res.status(404).json({ message: 'File not found. Please upload the data file first.' });
  }
});

app.post('/send', (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Admin email address
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred while sending email:', error);
      return res.status(500).send('Failed to send email. ' + error.message);
    }
    console.log('Email sent successfully:', info.response);
    res.send('Message sent successfully!');
  });
});

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
