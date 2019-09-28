import React from 'react';
import MenuList from './MenuList';

const MobileMenu = ({ handleMobileSidebar }) => {
  return (
    <>
      <button onClick={handleMobileSidebar}>닫기</button>
      {MenuList().list.map(menu => (
        <div key={menu.id}>{menu.menu}</div>
      ))}
    </>
  );
};

export default MobileMenu;
