import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Images/LOGO.gif';

function Navbar() {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavClick = (id) => {
        navigate('/');
        setTimeout(() => scrollToSection(id), 100); // Delay to ensure navigation is completed
    };

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            
                <Link to="/" className='logo'>
                    <img src={logo} alt='Logo' onClick={() => handleNavClick('main')} />
                </Link>
                <div id='logoname' className={nav ? 'active' : ''} style={{ margin: '10px' }}>
                    <h1 style={{ fontSize: '14px', marginTop: '18px', marginBottom: '0px' }}>Sanctuary of the Doomed</h1>
                    <h2 style={{ fontSize: '12px', marginTop: '0px' }}>Do you have what it takes?</h2>
                </div>
            </div>

            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li onClick={() => handleNavClick('main')}>HOME</li>
                <li><a href='http://forum.sanctuaryofthedoomed.com/'>FORUM</a></li>
                <li><Link to="/servers">SERVERS</Link></li>
                <li  onClick={() => handleNavClick('features')}><Link to="features">Why us</Link></li>
                <li onClick={() => handleNavClick('contact')}><Link to="contact">contact us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
