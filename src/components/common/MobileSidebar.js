import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import MobileMenu from './MobileMenu';
import { slideInRight } from 'react-animations';

const MobileSidebarWrapBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  background: rgba(0, 0, 0, 0.5);
  ${props =>
    !props.isShown &&
    css`
      display: none;
    `}
`;
const MobileSidebarBlock = styled.div`
  display: inherit;
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 128px);
  height: 100%;
  z-index: 50;
  background: white;
  max-width: 411px;
  animation: 0.3s ${keyframes`${slideInRight}`};
`;

const MobileMenuList = styled.div`
  display: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MobileSidebar = ({ handleMobileSidebar, isShown }) => {
  return (
    <MobileSidebarWrapBlock isShown={isShown} onClick={handleMobileSidebar}>
      <MobileSidebarBlock onClick={e => e.stopPropagation()}>
        <MobileMenuList>
          <MobileMenu handleMobileSidebar={handleMobileSidebar} />
        </MobileMenuList>
      </MobileSidebarBlock>
    </MobileSidebarWrapBlock>
  );
};

export default MobileSidebar;
