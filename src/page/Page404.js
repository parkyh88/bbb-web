import React from 'react';
import styled from 'styled-components';

const SpanBlock = styled.span`
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

const Page404 = ({ history }) => {
  const goback = () => history.goBack();
  const gohome = () => history.push('/');
  return (
    <div>
      <h1>404 Error</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <SpanBlock onClick={goback}>뒤로가기</SpanBlock>
      &nbsp;|&nbsp;
      <SpanBlock onClick={gohome}>홈으로</SpanBlock>
    </div>
  );
};

export default Page404;
