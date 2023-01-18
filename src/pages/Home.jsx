import React, { useState } from 'react'
import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import Row from "../components/Row/Row";
import MovieModal from '../components/Modal/MovieModal';
import requests from "../api/requests";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const movieClick = movie => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <>
      <Banner movieClick={movieClick} />
      <RowList>
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
      </RowList>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

const RowList = styled.div`
  width: 100%;
  background-color: #000;
`;