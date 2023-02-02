import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  background-color: #000;
`;
export const Container = styled.div``;
export const FooterCotent = styled.div`
  display: flex;
  justify-centent: space-between;
  flex-wrap: wrap;
`;
export const FooterText = styled.a`
  color: #808080;
  font-size: 12px;
  width: 110px;
  margin-bottom: 20px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
