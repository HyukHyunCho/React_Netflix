import React, { useState } from "react";
import requests from "../../services/requests";
import styled from "styled-components";
import Modal from "../../components/Modal/movieModal";
import RowContainer from "./RowContainer";

export default function GenreForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const movieClick = movie => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <GenreContainer>
      <RowContainer
        id="1"
        title="다큐멘터리"
        type="genre"
        fetchUrl={requests.fetchDocumentaries}
        movieClick={movieClick}
      />
      <RowContainer
        id="2"
        title="액션 영화"
        fetchUrl={requests.fetchActionMovies}
        movieClick={movieClick}
      />
      <RowContainer
        id="3"
        title="코미디 영화"
        type="genre"
        fetchUrl={requests.fetchComedyMovies}
        movieClick={movieClick}
      />
      <RowContainer
        id="4"
        title="호러 영화"
        type="genre"
        fetchUrl={requests.fetchHorrorMovies}
        movieClick={movieClick}
      />
      {modalOpen && (
        <Modal
          {...movieSelected}
          setModalOpen={setModalOpen}
        />
      )}
    </GenreContainer>
  );
}

const GenreContainer = styled.div`
  width: 100%;
  padding-top: 250px;
  min-height: 100vh;
  background-color: #000;
`;
