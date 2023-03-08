import React from 'react';
import './Weapon.css'

function Weapon({ id, jobName, weaponName, icon, isSelected, selectWeapon}) {
    const styles = {
        opacity: isSelected ? "25%" : "100%"
    }
    
    return (
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
    )
};

export default Weapon;