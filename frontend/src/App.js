import React from 'react';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import './index.css';
import './light.css';
import Feature from './Components/Feature';
import Contact from './Components/Contact';
import AdminUpload from './Components/AdminUpload';
import UserView from './Components/UserView';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Feature />
                <Contact />
              </>
            } />
            <Route path="/upload" element={<AdminUpload />} />
            <Route path="/servers" element={<UserView />} />
          </Routes>
        </BrowserRouter>
        <footer className="fixed-footer">
          <div className="switch">
            <label>{/**theme === "light" ? "Light Mode" : "Dark Mode"**/}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
