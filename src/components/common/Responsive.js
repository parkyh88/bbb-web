import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  &[class*='__Mobile'] {
    display: none;
  }
  /* 모바일 */
  @media all and (min-width: 320px) {
    width: 100%;
    &[class*='__Desktop'] {
      display: none;
    }
    &[class*='__Mobile'] {
      display: flex;
    }
  }

  /* 태블릿 */
  @media all and (min-width: 768px) {
    width: 100%;
    &[class*='__Desktop'] {
      display: none;
    }
    &[class*='__Mobile'] {
      display: flex;
    }
  }

  /* 작은 데스크탑 */
  @media all and (min-width: 1024px) {
    width: 100%;
    margin-left: 2%;
    margin-right: 2%;
    &[class*='__Desktop'] {
      display: none;
    }
    &[class*='__Mobile'] {
      display: flex;
    }
  }
  /* 큰 데스크탑 */
  @media (min-width: 1281px) {
    max-width: 80%;
    width: 100%;
    margin-right: 10%;
    margin-left: 10%;
    &[class*='__Desktop'] {
      display: flex;
    }
    &[class*='__Mobile'] {
      display: none;
    }
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
