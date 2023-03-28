import React from 'react';
import Materials from './Materials';

function MaterialsContainer({ tomestones, materials, type, weaponsTruths}) {
    const updatedMaterials = materials.filter(material => material.type === type)

    return (
        <div className='materials-container'>
            <p className='tomestone'>
                <img 
                    className='tomestone-icon'
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
    )
}

export default MaterialsContainer;