import React from 'react';
import Weapon from './Weapon';

function WeaponsContainer({ weapons, selectWeapon, type }) {
    const weaponElements = weapons.map(weapon => (
        <Weapon 
          key={weapon.id}
          weapon={weapon}
          wpnCategory={weapons}
          selectWeapon={selectWeapon}
          type={type}
        />
      ));
    
    return (
        <div className='weapon-elements'>
            {weaponElements}
        </div>
    )
}

export default WeaponsContainer;