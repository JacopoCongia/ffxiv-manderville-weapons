import React from 'react';
import './UncheckButton.css'

function UncheckButton({ handleClick }) {
    return (
        <button className='uncheck-all' onClick={handleClick}>Uncheck All</button>
    )
}

export default UncheckButton;