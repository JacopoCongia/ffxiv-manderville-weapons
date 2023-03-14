import { useEffect, useState } from 'react';
import './App.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from './data';
import Header from './components/Header';
import Weapon from './components/Weapon';
import WeaponsContainer from './components/WeaponsContainer';

function App() {
  const [weapons, setWeapons] = useState(JSON.parse(localStorage.getItem('manderville')) || data.manderville);
  const [amazingWeapons, setAmazingWeapons] = useState(JSON.parse(localStorage.getItem('amazingManderville')) || data.amazingManderville);
  const [materials, setMaterials] = useState({meteorites: 57, chondrites: 57})
  const [visibility, setVisibility] = useState(JSON.parse(localStorage.getItem('sectionVisibility')) || {weapons: true, amazingWeapons: true})
  
  const weaponsTruths = weapons.filter((obj) => obj.wpnName === 'Manderville Kite Shield' ? null : !obj.isSelected);
  const amazingWeaponsTruths = amazingWeapons.filter((obj) => obj.wpnName === 'Amazing Manderville Kite Shield' ? null : !obj.isSelected);

  function selectWeapon(id, type) {
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
  };

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
  };

  function handleVisibility(key, value) {
    setVisibility(prevVisibility => ({
        ...prevVisibility,
        [key]: !value
      }))
  };
  
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
  ));

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
  ));

    useEffect(() => {
      localStorage.setItem('manderville', JSON.stringify(weapons))
      localStorage.setItem('amazingManderville', JSON.stringify(amazingWeapons))
      localStorage.setItem('sectionVisibility', JSON.stringify(visibility))

      setMaterials(
        {
          meteorites: ((weaponsTruths.length) * 3),
          chondrites: ((amazingWeaponsTruths.length) * 3)
        }
      )
    }, [weapons, amazingWeapons, visibility]);

  return (
    <div className='main'>
      <Header />
        <div  className='weapons-header' onClick={() => handleVisibility('weapons', visibility.weapons)}>
          <p className='weapons-header--completed'>{19 - weaponsTruths.length}/19</p>  
          <h4>Manderville Weapons<span className='smaller-green'>iLvl 615 (Patch 6.25)</span></h4>
          {!visibility.weapons ? <ExpandMoreIcon sx={{fontSize: '40px'}} /> : <ExpandLessIcon sx={{fontSize: '40px'}} />}
        </div>
        { visibility.weapons && 
          <WeaponsContainer 
            weapons={weapons} 
            selectWeapon={selectWeapon} 
            weaponType='weapon' 
            materials={materials.meteorites}
            materialName='Manderium Meteorites'
            icon='/icons/Manderium_Meteorite_Icon.png'
            checkAll={() => checkAll('weapons')}
            uncheckAll={() => setWeapons(data.manderville)}
            weaponElements={weaponElements}
          />
        }
        
        <div className='weapons-header' onClick={() => handleVisibility('amazingWeapons', visibility.amazingWeapons)}>
          <p className='weapons-header--completed'>{19 - amazingWeaponsTruths.length}/19</p>
          <h4>Amazing Manderville Weapons<span className='smaller-green'>iLvl 630 (Patch 6.35)</span></h4>
          {!visibility.amazingWeapons ? <ExpandMoreIcon sx={{fontSize: '40px'}} /> : <ExpandLessIcon sx={{fontSize: '40px'}} />}
        </div>
        { visibility.amazingWeapons && 
          <WeaponsContainer 
            weapons={amazingWeapons} 
            selectWeapon={selectWeapon} 
            weaponType='amazingWeapon' 
            materials={materials.chondrites}
            materialName='Complementary Chondrites'
            icon='/icons/Complementary_Chondrite_Icon.png'
            checkAll={() => checkAll('amazingWeapons')}
            uncheckAll={() => setAmazingWeapons(data.amazingManderville)}
            weaponElements={amazingWeaponElements}
          />
          }
      </div>
  )
}

export default App;