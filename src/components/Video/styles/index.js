import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #000;
`;
export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  border: none;
  margin-top: 50px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    heightL 100%;
  }
`;
