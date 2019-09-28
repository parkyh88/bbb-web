import React from 'react';
import styled from 'styled-components';

const ContentBlock = styled.div`
  min-height: 600px;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: white;
  padding: 1rem 1rem;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  @media screen and (max-width: 1024px) {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const Content = ({ children, ...rest }) => {
  return <ContentBlock {...rest}>{children}</ContentBlock>;
};

export default Content;
