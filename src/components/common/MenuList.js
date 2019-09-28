const MenuList = isMobile => {
  const list = {
    list: [
      {
        id: 1,
        menu: '홈',
      },
      {
        id: 2,
        menu: '메뉴1',
      },
      {
        id: 3,
        menu: '메뉴2',
      },
      {
        id: 4,
        menu: '메뉴3',
      },
    ],
  };
  if (isMobile) list.list.push({ id: 5, menu: '로그인/회원가입' });
  return list;
};

export default MenuList;
