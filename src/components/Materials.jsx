import React from 'react';

function Materials(props) {
    return (
        <div className='materials-container'>
            <p className='astronomy'>
            <img 
                className='astronomy-icon'
                alt='Allagan Tomestone of Astronomy' 
                src='/icons/Allagan_Tomestone_of_Astronomy_Icon.png'
            />
            Allagan Tomestones of Astronomy: {props.materials / 3 * 1500}
            </p>
            <p className='primary-materials'>
                <img 
                    className='material-icon'
                    alt={props.materialName}
                    src={props.icon}
                />
            {props.materialName}: {props.materials}
            </p>
          </div>
    )
}

export default Materials;