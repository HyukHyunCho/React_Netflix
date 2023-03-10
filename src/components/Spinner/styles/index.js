import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: 100%;
  background-color: #000;
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  z-index: 1;
`;
export const Loading = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
