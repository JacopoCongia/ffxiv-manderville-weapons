import React from 'react';
import Weapon from './Weapon';

function WeaponsContainer({ weapons, selectWeapon }) {
    const weaponElements = weapons.map(weapon => (
        <Weapon 
          key={weapon.id}
          id={weapon.id}
          jobName={weapon.wpnJob}
          weaponName={weapon.wpnName}
          icon={weapon.icon}
          isSelected={weapon.isSelected}
          selectWeapon={() => selectWeapon(weapon.wpnName)}
        />
      ));
    
    return (
        <div className='weapon-elements'>
            {weaponElements}
        </div>
    )
}

export default WeaponsContainer;