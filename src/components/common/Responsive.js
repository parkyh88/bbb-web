import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  width: 1200px;
  margin: 0 auto;
  &[class*='__Mobile'] {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 1024px;
    padding-left: 1rem;
    padding-right: 1rem;
    &[class*='__Desktop'] {
      display: flex;
    }
    &[class*='__Mobile'] {
      display: none;
    }
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    &[class*='__Desktop'] {
      display: none;
    }
    &[class*='__Mobile'] {
      display: flex;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    &[class*='__Desktop'] {
      display: none;
    }
    &[class*='__Mobile'] {
      display: flex;
    }
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
