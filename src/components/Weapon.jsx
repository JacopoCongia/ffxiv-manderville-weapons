import React from 'react';

function Weapon({ weapon, selectWeapon, type, wpnCategory }) {
    const styles = {
        opacity: weapon.isSelected ? "25%" : "100%"
    };

    return (
            <div className='tooltip'>
                <span className='tooltiptext'>{weapon.wpnName}</span>
                <div 
                    onClick={() => selectWeapon(weapon.wpnName, type, wpnCategory)} 
                    style={styles} 
                    className='weapon' 
                    id={weapon.id}>
                    <img 
                        className="weapon--icon" 
                        alt={weapon.wpnName} 
                        src={weapon.icon} 
                    /> 
                    {weapon.wpnJob}
                </div>
            </div>
    )
};

export default Weapon;