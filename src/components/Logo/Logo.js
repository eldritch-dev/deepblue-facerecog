import React from 'react';
import Tilt from 'react-tilt';
import owl from './owl.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: '15px'}} alt='logo' src={owl} /> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;