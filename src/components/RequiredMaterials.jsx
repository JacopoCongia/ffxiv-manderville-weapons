import React, { useState } from 'react';

function RequiredMaterials({ materialQuantity }) {
    return (
        <div className='materials-container'>
        <p>
        <img 
            className='astronomy-icon'
            alt='Allagan Tomestone of Astronomy' 
            src='/icons/Allagan_Tomestone_of_Astronomy_Icon.png'
        />
        Allagan Tomestones of Astronomy: 
        </p>
        <p>
        <img 
            className='material-icon'
            alt={materialQuantity.chondrite} 
            src='/icons/Manderium_Meteorite_Icon.png'
        />
        Manderium Meteorites: {materialQuantity.chondrite}
        </p>
        </div>
    )
}

export default RequiredMaterials;