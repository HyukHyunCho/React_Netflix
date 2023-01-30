import React, { useState } from "react";
import requests from "../services/requests";
import styled from "styled-components";
import Row from "../components/Row/Row";
import MovieModal from "../components/Modal/MovieModal";

export default function BannerContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  const movieClick = movie => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <Container>
      <Row
        id="1"
        title="다큐멘터리"
        type="genre"
        fetchUrl={requests.fetchDocumentaries}
        movieClick={movieClick}
      />
      <Row
        id="2"
        title="액션 영화"
        fetchUrl={requests.fetchActionMovies}
        movieClick={movieClick}
      />
      <Row
        id="3"
        title="코미디 영화"
        type="genre"
        fetchUrl={requests.fetchComedyMovies}
        movieClick={movieClick}
      />
      <Row
        id="4"
        title="호러 영화"
        type="genre"
        fetchUrl={requests.fetchHorrorMovies}
        movieClick={movieClick}
      />
      {modalOpen && (
        <MovieModal
          {...movieSelected}
          setModalOpen={setModalOpen}
          setIsClicked={setIsClicked}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding-top: 250px;
  min-height: 100vh;
  background-color: #000;
`;
