import React from 'react';

function Materials({ tomestones, materials, materialName, icon }) {
    return (
        <div className='materials-container'>
            <p className='astronomy'>
            <img 
                className='astronomy-icon'
                alt={tomestones[0].name}
                src={tomestones[0].icon}
            />
            {tomestones[0].name}: {materials / 3 * 1500}
            </p>
            <p className='primary-materials'>
                <img 
                    className='material-icon'
                    alt={materialName}
                    src={icon}
                />
            {materialName}: {materials}
            </p>
          </div>
    )
}

export default Materials;