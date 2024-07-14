import React from 'react';
import candle from '../Images/candle.gif';


function Header() {
    return (
        <div id='main'>
            <div className='name'>
                <h1>Welcome to </h1>
                <h1>Sanctuary of the Doomed</h1>
                <p className='details'> “Credibility is a basic survival tool.”
                </p>
                <div className='header-btns'>
                    <img className='candle' src={candle} alt='Candle' />
                    <a href='https://discord.gg/DV42DXfmbC' className='header-btn'>DISCORD</a>
                    <img className='candle' src={candle} alt='Candle' />
                </div>
            </div>
        </div>
    );
}

export default Header;
