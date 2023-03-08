import React from 'react';

function UncheckButton({ handleClick }) {
    return (
        <button onClick={handleClick}>Uncheck All</button>
    )
}

export default UncheckButton;