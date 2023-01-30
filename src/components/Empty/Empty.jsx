import React from "react";
import styled from "styled-components";

export default function Empty({ children }) {
  return (
    <Layout>
      <Container>
        {children}
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
  background-color: #000;
`;
const Container = styled.div`
  font-size: 12px;
  color: #fff;
`;
