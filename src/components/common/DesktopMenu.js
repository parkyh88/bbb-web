import React from 'react';
import MenuList from './MenuList';

const DesktopMenu = () => {
  return (
    <>
      {MenuList().list.map(menu => (
        <div key={menu.id}>{menu.menu}</div>
      ))}
    </>
  );
};

export default DesktopMenu;
