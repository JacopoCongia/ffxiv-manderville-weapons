import React from 'react';

function Weapon(props) {
    const styles = {
        opacity: props.isSelected ? "25%" : "100%"
    }
    
    return (
            <div className='tooltip'>
                <span className='tooltiptext'>{props.weaponName}</span>
                <div 
                    onClick={props.selectWeapon} 
                    style={styles} 
                    className='weapon' 
                    id={props.id}>
                    <img 
                        className="weapon--icon" 
                        alt={props.weaponName} 
                        src={props.icon} 
                    /> 
                    {props.jobName}
                </div>
            </div>
    )
};

export default Weapon;