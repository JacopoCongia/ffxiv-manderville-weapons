import React from 'react';
import './CheckButton.css';

function CheckButton({ handleClick }) {
    return (
        <button className='check-all' onClick={handleClick}>Check All</button>
    )
}

export default CheckButton;