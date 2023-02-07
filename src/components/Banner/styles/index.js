import styled from "styled-components";

export const Headers = styled.header`
  background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0) 50%,
      rgba(20, 20, 20, 0.3) 70%,
      rgba(20, 20, 20, 1) 100%
    ),
    url(https://image.tmdb.org/t/p/original/${props => props.path});
  background-position: top center;
  background-size: cover;
`;
export const BannerContent = styled.div`
  width: 100%;
  height: 700px;
`;
export const BannerTitle = styled.div`
  font-size: 4vw;
  font-weight: 800;
  color: #fff;
  padding-top: 170px;
  padding-left: 50px;
  padding-bottom: 0.5rem;
`;
export const Banneroverview = styled.div`
  width: 30vw;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  padding-left: 50px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const BannerButton = styled.div`
  margin-left: 30px;
`;
export const Button = styled.button`
  min-width: 65px;
  border-radius: 5px;
  font-size: 1vw;
  font-weight: bold;
  cursor: pointer;
  border: none;
  padding: 15px;
  margin-top: 30px;
  margin-left: 10px;
  color: ${props => props.color};
  background-color: ${props => props.background || "rgba(109, 109, 110, 0.7)"};
  &:hover {
    background-color: ${props =>
      props.background === "white"
        ? "rgba(255, 255, 255, 0.7)"
        : "rgba(109, 109, 110, 0.5)"};
  }
`;
