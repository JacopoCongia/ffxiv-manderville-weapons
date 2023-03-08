import { useEffect, useState } from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import Weapon from './components/Weapon';

function App() {
  const [weapons, setWeapons] = useState(JSON.parse(localStorage.getItem('weapons')) || data[0]);
  const [materials, setMaterials] = useState ({astronomy: 27000, meteorites: 57})

  const selectWeapon = (id) => {
    setWeapons(oldWeapons => oldWeapons.map(weapon => {
      return weapon.id === id ?
        {...weapon, isSelected: !weapon.isSelected} :
        weapon
    }))
  }

  const weaponElements = weapons.map(item => (
    <Weapon 
      key={item.id}
      id={item.id}
      weaponName={item.wpnName}
      icon={item.icon}
      isSelected={item.isSelected}
      selectWeapon={() => selectWeapon(item.id)}
    />
  ))

    useEffect(() => {
      localStorage.setItem('weapons', JSON.stringify(weapons))
    }, [weapons])

  return (
    <div className='main'>
      <Header />
      <div className='content-container'>
        <h4>Manderville Weapons</h4>
        <div className='wpn-elements-container'>
          {weaponElements}
        </div>
        <div className='materials-container'>
          <p>
            <img 
              className='astronomy-icon'
              alt='Allagan Tomestone of Astronomy' 
              src='/icons/Allagan_Tomestone_of_Astronomy_Icon.png'
            />
            Allagan Tomestones of Astronomy: {materials.astronomy}
          </p>
          <p>
            <img 
                className='manderium-meteorite-icon'
                alt='Manderium Meteorite' 
                src='/icons/Manderium_Meteorite_Icon.png'
            />
            Manderium Meteorites: {materials.meteorites}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App;
