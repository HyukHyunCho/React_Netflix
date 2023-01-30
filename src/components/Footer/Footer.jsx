import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Layout>
      <FooterContainer>
        <FooterCotent>
          <FooterText>화면 해설</FooterText>
          <FooterText>고객 센터</FooterText>
          <FooterText>기프트카드</FooterText>
          <FooterText>미디어 센터</FooterText>
        </FooterCotent>
        <FooterCotent>
          <FooterText>투자 정보(IR)</FooterText>
          <FooterText>입사 정보</FooterText>
          <FooterText>이용 약관</FooterText>
          <FooterText>개인 정보</FooterText>
        </FooterCotent>
        <FooterCotent>
          <FooterText>법적 고지</FooterText>
          <FooterText>쿠키 설정</FooterText>
          <FooterText>회사 정보</FooterText>
          <FooterText>문의 하기</FooterText>
        </FooterCotent>
      </FooterContainer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 100%;
  position: relative;
  background-color: #000;
`;
const FooterContainer = styled.div`
  
`;
const FooterCotent = styled.div`
  display: flex;
  justify-centent: space-between;
  flex-wrap: wrap;
`;
const FooterText = styled.a`
  color: #808080;
  font-size: 12px;
  width: 110px;
  margin-bottom: 20px;
  text-decoration: none;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

