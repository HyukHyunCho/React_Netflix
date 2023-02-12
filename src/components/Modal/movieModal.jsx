import React from 'react'
import {
  ModalContainer,
  ModalWrapper,
  Modal,
  ModalClose,
  Image,
  Title,
  ModalContent,
  Detail,
  PersentText,
  NomalText,
  OverviewText,
} from "./styles";

export default function MovieModal({
  backdrop_path,
  title,
  original_title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  vote_count,
  setModalOpen,
}) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <Modal color="#111">
          <ModalClose onClick={() => setModalOpen(false)}>X</ModalClose>
          <Image
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="image"
          />
          <ModalContent>
            <Title>{title ? title : name}</Title>
            <Title>{original_title}</Title>
            <Detail>
              <PersentText>98% 일치</PersentText>
              <NomalText>
                개봉: {release_date ? release_date : first_air_date}
              </NomalText>
              <NomalText>평점 : {vote_average}</NomalText>
              <NomalText>👍{vote_count}</NomalText>
            </Detail>
            <OverviewText>{overview}</OverviewText>
          </ModalContent>
        </Modal>
      </ModalWrapper>
    </ModalContainer>
  );
};