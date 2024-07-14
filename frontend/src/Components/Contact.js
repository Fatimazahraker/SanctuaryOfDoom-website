import React, { useState } from 'react';
import axios from 'axios';
import location from '../Images/location.svg';
import emailImg from '../Images/emailicone.svg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/send', formData)
      .then((response) => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Failed to send message.');
      });
  };

  return (
    <div id='contact'>
      <div id='form'>
        <h1> CONTACT US</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Name / DISCORD / Ingame Name' value={formData.name} onChange={handleChange} required />
          <input type='email' name='email' placeholder='Email 📮 (So we can get back to you)' value={formData.email} onChange={handleChange} required />
          <input type='text' name='subject' placeholder=' How can we help ❓' value={formData.subject} onChange={handleChange} required />
          <textarea name='message' placeholder='Type your message here 💬 (Give us as much details as possible)' value={formData.message} onChange={handleChange} required></textarea>
          <input type='submit' value='Send 📧' />
        </form>
      </div>
      <div id='info'>
        <h1> 💬 Let's Chat! Your Voice Matters 💬</h1>
        <p> We're always eager to hear from our awesome community members! Whether you have questions, feedback, or just want to say hello, there are a couple of ways to get in touch:
        Join the Conversation on Discord 🎧
        Our Discord server is the heart of our community. It's where you can:
        </p>
        <h2>Find us on Discord</h2>
        <div id='location' style={{ display: '-ms-inline-grid' }}>
          <img src={location} alt='' />
          <a href='https://discord.gg/DV42DXfmbC' target='_blank' rel='noopener noreferrer'>https://discord.gg/DV42DXfmbC</a>
        </div>
        <h2>Send us an email</h2>
        <div id='email' style={{ display: '-ms-inline-grid' }}>
          <img src={emailImg} alt='' />
          <a href='mailto:admin@sanctuaryofthedoomed.com'>admin@sanctuaryofthedoomed.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
