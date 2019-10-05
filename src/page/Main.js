import React from 'react';
import Home from '../components/Home';
import Header from '../components/common/Header';
import Content from '../components/common/Content';

const Main = () => {
  return (
    <>
      <Header />
      <Content>
        <Home />
      </Content>
    </>
  );
};

export default Main;
