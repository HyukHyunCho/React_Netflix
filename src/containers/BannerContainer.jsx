import React, { useEffect, useState } from "react";
import requests from "../services/requests";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import {
  MovieData,
  MovieDataDetail,
} from "../services/axios";
import Spinner from "../components/Spinner/Spinner";
import Banner from "../components/Banner/Banner";
import Video from "../components/Video/Video";
import Row from "../components/Row/Row";
import MovieModal from "../components/Modal/MovieModal";
import Empty from "../components/Empty/Empty";

export default function BannerContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  const {
    data: movieNowData,
    isLoading: isLoadingMovie,
    error: errorMovie,
  } = useQuery(["movieData"], () => MovieData(requests.fetchNowPlaying), {
    retry: 0,
  });

  const {
    data: movie,
    isLoading: isLoadingDetail,
    error: errorDetail,
  } = useQuery(["MovieDataDetail"], () => MovieDataDetail(movieNowData), {
    enabled: !!movieNowData,
    retry: 0,
  });
 
  const movieClick = movie => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  if (isLoadingMovie || isLoadingDetail) return <Spinner />;
  if (errorMovie) return <Empty>에러</Empty>;
  if (errorDetail) return <Empty>에러</Empty>;
  // if (isLoadingDetails) return <Empty>에러123</Empty>;
  // if (errorDetails) return <Empty>에러124</Empty>;
  
  return (
    <Container>
      {isClicked === false ? (
        <>
          <Banner
            movie={movie}
            movieClick={movieClick}
            setIsClicked={setIsClicked}
          />
          <Row
            id="1"
            title="Top 20 순위"
            fetchUrl={requests.fetchTopRated}
            movieClick={movieClick}
            isLankRow
          />
          <Row
            id="2"
            title="오직 넷플릭스에서만"
            fetchUrl={requests.fetchNetflixOriginals}
            movieClick={movieClick}
          />
          <Row
            id="3"
            title="지금 뜨는 콘텐츠"
            fetchUrl={requests.fetchTrending}
            movieClick={movieClick}
          />
          {modalOpen && (
            <MovieModal
              {...movieSelected}
              setModalOpen={setModalOpen}
              setIsClicked={setIsClicked}
            />
          )}
        </>
      ) : (
        <>
          {movie.videos.results[0] ? (
            <Video movie={movie} />
          ) : (
            <Empty>
              <p>영상이 없습니다.</p>
            </Empty>
          )}
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #000;
`;