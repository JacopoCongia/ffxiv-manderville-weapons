import React from "react";
import Weapon from "./Weapon";

function WeaponsContainer({ weapons, selectWeapon, type }) {
  const weaponElements = weapons.map((weapon) => (
    <Weapon
      key={weapon.id}
      weapon={weapon}
      wpnCategory={weapons}
      selectWeapon={selectWeapon}
      type={type}
    />
  ));

  return (
    <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5">
      {weaponElements}
    </div>
  );
}

export default WeaponsContainer;
