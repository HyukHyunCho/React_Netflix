import React from "react";
import styled from "styled-components";

export default function Empty({ children }) {
  // "${}";
  return (
    <Layout>
      <Container>
        {children}
        {/* <p>
            {`입력하신 검색어 (와)과 일치하는 결과가 없습니다.`}{" "}
          </p>
          <p>추천 검색어:</p>
          <ul>
            <li>다른 키워드를 입력해 보세요.</li>
            <li>시리즈나 영화를 찾고 있으신가요?</li>
            <li>
              영화 제목, 시리즈 제목, 또는 배우나 감독의 이름으로 검색해 보세요.
            </li>
            <li>
              코미디, 로맨스, 스포츠 또는 드라마와 같은 장르명으로 검색해
              보세요.
            </li>
          </ul> */}
      </Container>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  font-size: 12px;
  color: #fff;
`;
