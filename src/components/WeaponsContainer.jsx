import React from 'react';
import Weapon from './Weapon';

function WeaponsContainer({ weapons, selectWeapon }) {
    const weaponElements = weapons.map(item => (
        <Weapon 
          key={item.id}
          id={item.id}
          jobName={item.wpnJob}
          weaponName={item.wpnName}
          icon={item.icon}
          isSelected={item.isSelected}
          selectWeapon={() => selectWeapon(item.wpnName)}
        />
      ));
    
    return (
        <div className='weapon-elements'>
            {weaponElements}
        </div>
    )
}

export default WeaponsContainer;