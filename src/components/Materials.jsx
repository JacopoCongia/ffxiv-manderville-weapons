function Materials({ materials, weaponsTruths }) {
    const materialsElements = materials.map(material => {
        return (
            <p key={material.id} className='primary-materials'>
                <img 
                    className='material-icon'
                    alt={material.name}
                    src={material.icon}
                />
                {material.name}: {material.reqPerWeapon * weaponsTruths.length}
            </p>
        )
    })
    
    return (
        <div>
            {materialsElements}
        </div>
    )
}

export default Materials;