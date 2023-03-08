import { useEffect, useState } from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import Weapon from './components/Weapon';

function App() {
  const [weapons, setWeapons] = useState(JSON.parse(localStorage.getItem('mandervilleWeapons')) || data[0]);
  const [amazingWeapons, setAmazingWeapons] = useState(JSON.parse(localStorage.getItem('amazingMandervilleWeapons')) || data[1]);
  const [materials, setMaterials] = useState ({astronomy: 27000, meteorites: 57, chondrites: 57})

  const selectWeapon = (id) => {
    setWeapons(oldWeapons => oldWeapons.map(weapon => {
      return weapon.id === id ?
        {...weapon, isSelected: !weapon.isSelected} :
        weapon
    }))
  }

  const selectAmazingWeapon = (id) => {
    setAmazingWeapons(oldWeapons => oldWeapons.map(weapon => {
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

  const amazingWeaponElements = amazingWeapons.map(item => (
    <Weapon 
      key={item.id}
      id={item.id}
      weaponName={item.wpnName}
      icon={item.icon}
      isSelected={item.isSelected}
      selectWeapon={() => selectAmazingWeapon(item.id)}
    />
  ))

    useEffect(() => {
      localStorage.setItem('mandervilleWeapons', JSON.stringify(weapons))
      localStorage.setItem('amazingMandervilleWeapons', JSON.stringify(amazingWeapons))

    }, [weapons, amazingWeapons])

  return (
    <div className='main'>
      <Header />
        <div className='content-container'>
          <h4>Manderville Weapons - ilvl 615</h4>
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
                  className='material-icon'
                  alt='Manderium Meteorite' 
                  src='/icons/Manderium_Meteorite_Icon.png'
              />
              Manderium Meteorites: {materials.meteorites}
            </p>
          </div>
        </div>
        <div className='content-container'>
          <h4>Amazing Manderville Weapons - ilvl 630</h4>
          <div className='wpn-elements-container'>
            {amazingWeaponElements}
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
                  className='material-icon'
                  alt='Manderium Meteorite' 
                  src='/icons/Complementary_Chondrite_Icon.png'
              />
              Complementary Chondrites: {materials.chondrites}
            </p>
          </div>
        </div>
      </div>
  )
}

export default App;
