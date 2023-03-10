import React from 'react';
import ReqMaterials from './ReqMaterials';
import CheckButton from './CheckButton';
import UncheckButton from './UncheckButton';

function WeaponsContainer(props) {
    return (
        <div className='content-container'>
            <div className='weapon-elements'>
            {props.weaponElements}
            </div>
            <ReqMaterials 
                materials={props.materials} 
                materialName={props.materialName}
                icon={props.icon}
            />
            <CheckButton handleClick={props.checkAll}/>
            <UncheckButton handleClick={props.uncheckAll}/>
        </div>
    )
}

export default WeaponsContainer;