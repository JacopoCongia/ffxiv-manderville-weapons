import React from 'react';
import './Weapon.css'

function Weapon({ id, jobName, weaponName, icon, isSelected, selectWeapon}) {
    const styles = {
        opacity: isSelected ? "25%" : "100%"
    }
    
    return (
            <div className='tooltip'>
                <span className='tooltiptext'>{weaponName}</span>
                <div 
                    onClick={selectWeapon} 
                    style={styles} 
                    className='weapon' 
                    id={id}>
                    <img 
                        className="weapon--icon" 
                        alt={weaponName} 
                        src={icon} /> 
                    {jobName}
                </div>
            </div>
    )
};

export default Weapon;