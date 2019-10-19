import React from 'react';
import styled from 'styled-components';

const ContentBlock = styled.div`
  /* 모바일 */
  @media all and (min-width: 320px) {
    min-height: 600px;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: white;
    border-radius: 5px;
  }

  /* 태블릿 */
  @media all and (min-width: 768px) {
    min-height: 600px;
    background-color: white;
    border-radius: 5px;
  }

  /* 작은 데스크탑 */
  @media all and (min-width: 1024px) {
    min-height: 600px;
    margin-left: 2%;
    margin-right: 2%;
    background-color: white;
    border-radius: 5px;
  }

  /* 큰 데스크탑 */
  @media (min-width: 1281px) {
    min-height: 600px;
    margin-left: 10%;
    margin-right: 10%;
    background-color: white;
    border-radius: 5px;
  }
`;

const Content = ({ children, ...rest }) => {
  return <ContentBlock {...rest}>{children}</ContentBlock>;
};

export default Content;
