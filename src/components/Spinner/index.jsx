import React from "react";
import { Container, SpinnerContainer, Loading } from "./styles";

export default function Spinner() {
  return (
    <Container>
      <SpinnerContainer>
        <Loading />
      </SpinnerContainer>
    </Container>
  );
}
