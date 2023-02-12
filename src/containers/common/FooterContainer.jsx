import React from "react";
import Footer from "../../components/Footer"
import { FooterCotent, FooterText } from "../../components/Footer/styles";

export default function FooterContainer() {
    return (
      <Footer>
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
      </Footer>
    );
}

