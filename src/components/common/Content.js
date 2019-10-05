import React from 'react';
import styled from 'styled-components';

const ContentBlock = styled.div`
  min-height: 600px;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: white;
  padding: 1rem 1rem;
  border-radius: 5px;
`;

const Content = ({ children, ...rest }) => {
  return <ContentBlock {...rest}>{children}</ContentBlock>;
};

export default Content;
