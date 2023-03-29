import React from "react";
import Materials from "./Materials";

function MaterialsContainer({ tomestones, materials, type, weaponsTruths }) {
  const updatedMaterials = materials.filter(
    (material) => material.type === type
  );

  return (
    <div className="flex flex-col items-start text-[18px] gap-2 py-5">
      <p className="flex items-center gap-3">
        <img
          className="w-5"
          alt={tomestones.name}
          src={tomestones.icon}
        />
        {tomestones.name}: {weaponsTruths.length * 1500}
      </p>
      <Materials
        materials={updatedMaterials}
        weaponsTruths={weaponsTruths}
      />
    </div>
  );
}

export default MaterialsContainer;
