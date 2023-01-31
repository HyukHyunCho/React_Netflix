import React from 'react'
import { Layout, Container} from "./styles";

export default function Footer({ children }) {
  return (
    <Layout>
      <Container>{children}</Container>
    </Layout>
  );
}