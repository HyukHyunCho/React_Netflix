import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  top: -120px;
  width: 100%;
  padding: 2.5rem;
  box-sizing: border-box;
`;
export const BannerContainer = styled.div`
  width: 100%;
  background-color: #000;
`;
export const Title = styled.div`
  padding: 5px;
  font-size: 1.5rem;
  text-style: bold;
  color: #fff;
`;
export const RowLankContainer = styled.div`
  display: flex;
  width: 100%;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
export const RowImgContainer = styled.div`
  width: 50%;
  z-index: 100;
`;
export const RowLankNumber = styled.img`
  position: absolute;
  width: 69%;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
export const RowLankItem = styled.img`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
`;
export const RowNomalItem = styled.img`
  width: 95%;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;



export const SearchContainer = styled.div`
  background-color: #000;
  padding: 2.5rem;
`;
export const RowContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 120px;
`;
// const Title = styled.div`
//   font-size: 28px;
//   text-style: bold;
//   color: #fff;
// `;
export const RowSearchItem = styled.img`
  box-sizing: border-box;
  width: 16.5%;
  border-radius: 10px;
  cursor: pointer;
  padding: 20px 2px 20px 2px;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
  @media screen and (max-width: 1100px) {
    width: 25%;
  }
  @media screen and (max-width: 800px) {
    width: 33%;
  }
  @media screen and (max-width: 500px) {
    width: 49%;
  }
`;