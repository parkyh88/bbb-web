import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/common/Header';
import { setMobileSidebar } from '../modules/header';

const HeaderContainer = () => {
  const isShown = useSelector(state => state.header.isShown);
  const dispatch = useDispatch();
  const handleMobileSidebar = useCallback(
    () => dispatch(setMobileSidebar(isShown)),
    [dispatch, isShown],
  );
  return <Header isShown={isShown} handleMobileSidebar={handleMobileSidebar} />;
};

export default React.memo(HeaderContainer);
