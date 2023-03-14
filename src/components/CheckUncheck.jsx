import React from 'react';
import './CheckUncheck.css';

function CheckUncheck({ handleClickCheck, handleClickUncheck }) {
    return (
        <div>
            <button className='check-all' onClick={handleClickCheck}>Check All</button>
            <button className='uncheck-all' onClick={handleClickUncheck}>Uncheck All</button>
        </div>
    )
}

export default CheckUncheck;