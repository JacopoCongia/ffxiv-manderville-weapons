import React from 'react';

function CheckButton({ handleClick }) {
    return (
        <button className='check' onClick={handleClick}>Check All</button>
    )
}

export default CheckButton;