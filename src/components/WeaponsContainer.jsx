import React from 'react';
import Materials from './Materials';
import CheckUncheck from './CheckUncheck';

function WeaponsContainer(props) {
    return (
        <div className='content-container'>
            <div className='weapon-elements'>
            {props.weaponElements}
            </div>
            <Materials 
                materials={props.materials} 
                materialName={props.materialName}
                icon={props.icon}
            />
            <CheckUncheck 
                handleClickUncheck={props.uncheckAll} 
                handleClickCheck={props.checkAll}
            />
        </div>
    )
}

export default WeaponsContainer;