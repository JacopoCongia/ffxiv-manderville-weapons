function Materials({ materials, weaponsTruths }) {
  const materialsElements = materials.map((material) => {
    return (
      <p
        key={material.id}
        className="flex items-center gap-3"
      >
        <img
          className="w-5"
          alt={material.name}
          src={material.icon}
        />
        {material.name}: {material.reqPerWeapon * weaponsTruths.length}
      </p>
    );
  });

  return <div>{materialsElements}</div>;
}

export default Materials;
