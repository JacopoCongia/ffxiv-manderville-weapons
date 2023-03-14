import React from 'react';

function CheckUncheck(props) {
    return (
        <div className='check-uncheck-container'>
            <button className='check-all' onClick={props.checkAll}>Check All</button>
            <button className='uncheck-all' onClick={props.uncheckAll}>Uncheck All</button>
        </div>
    )
}

export default CheckUncheck;