import React from "react";

function Weapon({ weapon, selectWeapon, type, wpnCategory }) {
  const styles = {
    opacity: weapon.isSelected ? "25%" : "100%"
  };

  return (
    <div className="group relative inline-block text-center">
      <span className="group-hover:visible invisible absolute w-[120px] opacity-90 bg-zinc-700 p-[10px] rounded-[6px] bottom-[105%] left-[50%] ml-[-60px] text-[15px]">
        {weapon.wpnName}
      </span>
      <div
        onClick={() => selectWeapon(weapon.wpnName, type, wpnCategory)}
        style={styles}
        className="cursor-pointer text-[14px]"
        id={weapon.id}
      >
        <img
          className="w-[80px] h-[80px]"
          alt={weapon.wpnName}
          src={weapon.icon}
        />
        {weapon.wpnJob}
      </div>
    </div>
  );
}

export default Weapon;
