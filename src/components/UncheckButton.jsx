import React from 'react';

function UncheckButton({ handleClick }) {
    return (
        <button className='uncheck' onClick={handleClick}>Uncheck All</button>
    )
}

export default UncheckButton;