import React, { useState } from 'react'
import requests from '../../api/requests';
import styled from 'styled-components';
import { useQuery } from "@tanstack/react-query";
import { MovieData, MovieDetailData } from "../../api/axios";

export default function Banner() {

  const [isClicked, setIsClicked] = useState(false);

  const {
    data: movieNowData,
    isLoading: isLoadingMovie,
    error: errorMovie,
  } = useQuery(["movieData"], () => MovieData(requests.fetchNowPlaying));


  const {
    data: movie,
    isLoading: isLoadingDetail,
    error: errorDetail,
  } = useQuery(["movieDetailData"], () => MovieDetailData(movieNowData), {
    enabled: !!movieNowData,
  });

  if (isLoadingMovie) return <div>로딩..</div>;
  if (errorMovie) return <div>에러</div>;

  if (isLoadingDetail) return <div>로딩..</div>;
  if (errorDetail) return <div>에러</div>;
  
  // const truncate = (str, n) => {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // };

  if (!isClicked) {
    return (
      <Headers path={movie.backdrop_path}>
        <BannerContent>
          <BannerTitle>
            {movie.title || movie.name || movie.original_name}
          </BannerTitle>
          <Banneroverview>{movie.overview}</Banneroverview>
          <BannerButton>
            <Button
              color="black"
              background="white"
              onClick={() => setIsClicked(true)}
            >
              ▶ 재생
            </Button>
            <Button
              color="white"
              //onClick={() => setIsClicked(true)}
            >
              상세 정보
            </Button>
          </BannerButton>
        </BannerContent>

        {/* <div className="banner_contents">
          <h1 className="banner_title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="banner_buttons">
            <button
              className="banner_button play"
              onClick={() => setIsClicked(true)}
            >
              ▶ 재생
            </button>
            <button className="banner_button info">More Information</button>
          </div>

          <h1 className="banner_description">
            {truncate(movie.overview, 100)}
          </h1>
        </div>
        <div className="banner--fadeBottom" /> */}
      </Headers>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1    &mute=1&playlist=${movie.videos.results[0].key}`}
            width="640"
            height="360"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></Iframe>
        </HomeContainer>
      </Container>
    );
  }
}
 
const Headers = styled.header`
  background-image: url(https://image.tmdb.org/t/p/original/${props =>props.path});
  background-position: top center;
  background-size: cover;
`;

const BannerContent = styled.div`
  width: 100%;
  height: 470px;

`
const BannerTitle = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  padding-top: 100px;
  padding-left: 50px;
  padding-bottom: 0.5rem;
`;

const Banneroverview = styled.div`
  width: 30vw;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  padding-left: 50px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp:7;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BannerButton = styled.div`
  margin-left: 30px;
`
const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-top: 30px;
  margin-left: 10px;
  color: ${props => props.color};
  background-color: ${props => props.background || "rgba(109, 109, 110, 0.7)"};
  &:hover {
    background-color: ${props =>
      props.background === "white" ? "rgba(255, 255, 255, 0.7)" : "rgba(109, 109, 110, 0.5)"};
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    heightL 100%;
  }
`

const Container = styled.div`
  display: flex;
  justify=items: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh
`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`