import React, { useState } from 'react';
import requests from '../services/requests';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { MovieData, MovieDataDilata } from '../services/axios';
import Spinner from '../components/Spinner/Spinner';
import Banner from '../components/Banner/Banner';
import Video from '../components/Video/Video';
import Row from '../components/Row/Row';
import MovieModal from '../components/Modal/MovieModal';
import Empty from '../components/Empty/Empty';

export default function BannerContainer() {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  const {
    data: movieNowData,
    isLoading: isLoadingMovie,
    error: errorMovie,
  } = useQuery(['movieData'], () => MovieData(requests.fetchNowPlaying), {
    retry: 0,
  });

  const {
    data: movie,
    isLoading: isLoadingDetail,
    error: errorDetail,
  } = useQuery(['MovieDataDilata'], () => MovieDataDilata(movieNowData), {
    enabled: !!movieNowData,
    retry: 0,
  });

  const movieClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  if (isLoadingMovie || isLoadingDetail) return <Spinner />;
  if (errorMovie) return <div>에러</div>;
  if (errorDetail) return <div>에러</div>;

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
            title="오직 넷플릭스에서만"
            fetchUrl={requests.fetchNetflixOriginals}
            movieClick={movieClick}
          />
          <Row
            id="2"
            title="지금 뜨는 콘텐츠"
            fetchUrl={requests.fetchTrending}
            movieClick={movieClick}
          />
          {modalOpen && (
            <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
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

// const Layout = styled.div`
//   width: 100%;
//   background-color: #000;
// `;
