import { useEffect, useState } from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import WeaponsHeader from './components/WeaponsHeader';
import WeaponsContainer from './components/WeaponsContainer';
import Materials from './components/Materials';
import CheckUncheck from './components/CheckUncheck';

function App() {
  const [weapons, setWeapons] = useState(JSON.parse(localStorage.getItem('data')) || data);
  const [materials, setMaterials] = useState({meteorites: 0, chondrites: 0})
  const [visibility, setVisibility] = useState(JSON.parse(localStorage.getItem('sectionVisibility')) || {weapons: true, amazingWeapons: true})
  
  const weaponsTruths = weapons.manderville.filter((obj) => obj.wpnName === 'Manderville Kite Shield' ? null : !obj.isSelected);
  const amazingWeaponsTruths = weapons.amazingManderville.filter((obj) => obj.wpnName === 'Amazing Manderville Kite Shield' ? null : !obj.isSelected);

  function selectWeapon(name, key, wpnCategory) {
    setWeapons(oldWeapons => ({
      ...oldWeapons,
      [key]: wpnCategory.map(weapon => {
        return weapon.wpnName === name ?
          {
            ...weapon, 
            isSelected: !weapon.isSelected
          } :
          weapon
        })
    }))
  };

  function checkAll(allChecked, type) {
    setWeapons(
      {
        ...weapons, 
        [type]: allChecked
      }
    );
  };

  function uncheckAll(allUnchecked, type) {
    setWeapons(
      {
        ...weapons, 
        [type]: allUnchecked
      }
    );
  };
  
  function handleVisibility(key, value) {
    setVisibility(prevVisibility => ({
        ...prevVisibility,
        [key]: !value
      }))
  };
  
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(weapons))
    localStorage.setItem('sectionVisibility', JSON.stringify(visibility))

    setMaterials(
      {
        meteorites: ((weaponsTruths.length) * 3),
        chondrites: ((amazingWeaponsTruths.length) * 3)
      }
    )
  }, [weapons, visibility]);

  return (
    <div>
      <Header />
        <WeaponsHeader 
          weaponsTruths={weaponsTruths.length}
          handleVisibility={() => handleVisibility('weapons', visibility.weapons)}
          visibility={visibility.weapons}
          name='Manderville Weapons'
          patchInfo='iLvl 615 (Patch 6.25)'
        />
        { visibility.weapons && 
          <div className='main'>
            <WeaponsContainer 
              weapons={weapons.manderville} 
              type='manderville'
              selectWeapon={selectWeapon}
            />
            <Materials 
              materials={materials.meteorites} 
              materialName={data.materials[0].name}
              icon={data.materials[0].icon}
              tomestones={data.tomestones}
            />
            <CheckUncheck 
              weapons={weapons.manderville}
              type='manderville'
              checkAll={checkAll}
              uncheckAll={uncheckAll}
            />
          </div>
        }
        <WeaponsHeader 
          weaponsTruths={amazingWeaponsTruths.length}
          handleVisibility={() => handleVisibility('amazingWeapons', visibility.amazingWeapons)}
          visibility={visibility.amazingWeapons}
          name='Amazing Manderville Weapons'
          patchInfo='iLvl 630 (Patch 6.35)'
        />
        { visibility.amazingWeapons && 
          <div className='main'>
            <WeaponsContainer 
              weapons={weapons.amazingManderville}
              type='amazingManderville'
              selectWeapon={selectWeapon} 
            />
            <Materials 
              materials={materials.chondrites} 
              materialName={data.materials[1].name}
              icon={data.materials[1].icon}
              tomestones={data.tomestones}
            />
            <CheckUncheck 
              weapons={weapons.amazingManderville}
              type='amazingManderville'
              checkAll={checkAll}
              uncheckAll={uncheckAll}
            />
          </div>
          }
      </div>
  )
}

export default App;