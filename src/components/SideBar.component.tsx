import React from 'react';
import SideBarItemComponent from './SideBarItem.component';
import {MovieIcon, PersonIcon} from '../../shared/icons';

const SideBarComponent = () => {
  return (
      <div className="bg-gray-900 text-white w-64 flex-shrink-0 overflow-y-auto">
          <ul className="mt-6">
              <SideBarItemComponent title={'Peliculas'} icon={<MovieIcon/>}/>
              <SideBarItemComponent title={'Personajes'} icon={<PersonIcon/>}/>
              <SideBarItemComponent title={'Planetas'} icon={<MovieIcon/>}/>
          </ul>
      </div>
  )
}

export default SideBarComponent;