import { useEffect, useState } from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import Weapon from './components/Weapon';
import ReqMaterials from './components/ReqMaterials';
import CheckButton from './components/CheckButton';
import UncheckButton from './components/UncheckButton';

function App() {
  const [weapons, setWeapons] = useState(JSON.parse(localStorage.getItem('mandervilleWeapons')) || data[0]);
  const [amazingWeapons, setAmazingWeapons] = useState(JSON.parse(localStorage.getItem('amazingMandervilleWeapons')) || data[1]);
  const [materials, setMaterials] = useState ({meteorites: 57, chondrites: 57})
  
  const selectWeapon = (id, type) => {
    if (type === 'weapon') {
      setWeapons(oldWeapons => oldWeapons.map(weapon => {
        return weapon.id === id ?
          {...weapon, isSelected: !weapon.isSelected} :
          weapon
      }))
    } else if (type === 'amazingWeapon') {
      setAmazingWeapons(oldWeapons => oldWeapons.map(weapon => {
        return weapon.id === id ?
          {...weapon, isSelected: !weapon.isSelected} :
          weapon
      }))
    }
  }

  function checkAll(type) {
    if (type === 'weapons') {
      setWeapons(oldWeapons => oldWeapons.map(weapon => {
        return {
          ...weapon, 
          isSelected: true}
      }))
    } else if (type === 'amazingWeapons') {
      setAmazingWeapons(oldWeapons => oldWeapons.map(weapon => {
        return {
          ...weapon, 
          isSelected: true}
      }))
    }
  }

  const weaponElements = weapons.map(item => (
    <Weapon 
      key={item.id}
      id={item.id}
      jobName={item.wpnJob}
      weaponName={item.wpnName}
      icon={item.icon}
      isSelected={item.isSelected}
      selectWeapon={() => selectWeapon(item.id, 'weapon')}
    />
  ))

  const amazingWeaponElements = amazingWeapons.map(item => (
    <Weapon 
      key={item.id}
      id={item.id}
      jobName={item.wpnJob}
      weaponName={item.wpnName}
      icon={item.icon}
      isSelected={item.isSelected}
      selectWeapon={() => selectWeapon(item.id, 'amazingWeapon')}
    />
  ))

    useEffect(() => {
      localStorage.setItem('mandervilleWeapons', JSON.stringify(weapons))
      localStorage.setItem('amazingMandervilleWeapons', JSON.stringify(amazingWeapons))
      const weaponsTruths = weapons.filter((obj) => obj.wpnName === 'Manderville Kite Shield' ? null : !obj.isSelected);
      setMaterials(prevMaterials => {
          return {
          ...prevMaterials,
          meteorites: (weaponsTruths.length) * 3
        } 
      })
      const amazingWeaponsTruths = amazingWeapons.filter((obj) => obj.wpnName === 'Amazing Manderville Kite Shield' ? null : !obj.isSelected);
      setMaterials(prevMaterials => {
          return {
          ...prevMaterials,
          chondrites: (amazingWeaponsTruths.length) * 3
        } 
      })
    }, [weapons, amazingWeapons])

  return (
    <div className='main'>
      <Header />
        <div className='content-container'>
          <h4>Manderville Weapons <span className='smaller-green'>iLvl 615 (Patch 6.25)</span></h4>
          <div className='wpn-elements-container'>
            {weaponElements}
          </div>
          <ReqMaterials materials={materials.meteorites} materialName='Manderium Meteorites' icon='/icons/Manderium_Meteorite_Icon.png' />
          <CheckButton handleClick={() => checkAll('weapons')}/>
          <UncheckButton handleClick={() => setWeapons(data[0])}/>
        </div>
        
        <div className='content-container'>
          <h4>Amazing Manderville Weapons <span className='smaller-green'>iLvl 630 (Patch 6.35)</span></h4>
          <div className='wpn-elements-container'>
            {amazingWeaponElements}
          </div>
          <ReqMaterials materials={materials.chondrites} materialName='Complementary Chondrites' icon='/icons/Complementary_Chondrite_Icon.png' />
          <CheckButton handleClick={() => checkAll('amazingWeapons')}/>
          <UncheckButton handleClick={() => setAmazingWeapons(data[1])}/>
        </div>
      </div>
  )
}

export default App;
