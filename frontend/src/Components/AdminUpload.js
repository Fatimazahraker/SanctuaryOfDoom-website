import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import './adminUpload.css'; // Import the CSS file

const AdminUpload = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const hashedPassword = '$2a$10$nvCHxawa/lWF3MqkljzVkORxDsfysgVrfckpkxLXJpMs07YXN1dMa'; 

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const match = await bcrypt.compare(password, hashedPassword);
    if (match) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file to upload');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file', error);
      alert('Failed to upload file');
    }
  };

  return (
    <div id='Admin'> 
      <h1>Admin Upload</h1>
      {!isAuthenticated ? (
        <form onSubmit={handlePasswordSubmit}>
          <input 
            type="password" 
            placeholder="Enter password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
      )}
    </div>
  );
};

export default AdminUpload;
