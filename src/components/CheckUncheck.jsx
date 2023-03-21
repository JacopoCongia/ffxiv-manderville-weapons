import React from 'react';

function CheckUncheck({ checkAll, uncheckAll, weapons, type }) {
    const allChecked = weapons.map(weapon => (
        {
            ...weapon,
            isSelected: true
        }
    ));

    const allUnchecked = weapons.map(weapon => (
        {
            ...weapon,
            isSelected: false
        }
    ));
   
    return (
        <div className='check-uncheck-container'>
            <button className='check-all' onClick={() => checkAll(allChecked, type)}>Check All</button>
            <button className='uncheck-all'onClick={() => uncheckAll(allUnchecked, type)}>Uncheck All</button>
        </div>
    )
}

export default CheckUncheck;