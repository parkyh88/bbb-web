import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import DesktopMenu from './DesktopMenu';
import MobileSidebar from './MobileSidebar';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  font-family: 'Eoe_Zno_M', sans-serif;
  color: #495057;

  a {
    color: black;
    text-decoration: none;
    outline: none;
    &:hover,
    &:active {
      text-decoration: none;
      color: #4c6ef5;
    }
  }

  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .menu {
    display: flex;
    margin-left: 2.5rem;
    div {
      display: flex;
      align-items: center;
      &:hover {
        color: #4c6ef5;
        cursor: pointer;
      }
    }
    div + div {
      margin-left: 2rem;
    }
  }
  .right {
    display: flex;
    align-items: center;
    margin-left: auto;
    &:hover {
      color: #4c6ef5;
      cursor: pointer;
    }
  }

  &[class*='__Mobile'] {
    /* display: flex; */
    justify-content: space-around;
    .left {
      flex: 1;
    }
    .logo {
      display: flex;
      align-items: center;
      img {
        height: 2rem;
        margin: 0 auto;
      }
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header = ({ handleMobileSidebar, isShown }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper className="Header__Desktop">
          <Link to="/" className="logo">
            BBB
          </Link>
          <div className="menu">
            <DesktopMenu />
          </div>
          <div className="right">
            <div>로그인/가입</div>
          </div>
        </Wrapper>
        <Wrapper className="Header__Mobile">
          <div className="left"></div>
          <Link to="/" className="logo">
            BBB
          </Link>
          <div className="right">
            <TiThMenu
              style={{ height: '100%' }}
              onClick={handleMobileSidebar}
            />
          </div>
        </Wrapper>
      </HeaderBlock>
      <MobileSidebar
        handleMobileSidebar={handleMobileSidebar}
        isShown={isShown}
      />
      <Spacer />
    </>
  );
};

export default Header;
