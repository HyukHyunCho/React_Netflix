import React from 'react'
import {
  ModalContainer,
  ModalWrapper,
  Modal,
  ModalClose,
 
  Image,
  Title,
  PlayButton,
  ModalContent,
  Detail,
  PersentText,
  NomalText,
  OverviewText,
} from "./styles";

export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
  setIsClicked,
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
            <Title>{title ? title : name}</Title>
            <PlayButton onClick={() => setIsClicked(true)}>▶ 재생</PlayButton>
         

          <ModalContent>
            <Detail>
              <PersentText>98% 일치</PersentText>
              <NomalText>
                {release_date ? release_date : first_air_date}
              </NomalText>
              <NomalText>평점 : {vote_average}</NomalText>
            </Detail>
            <OverviewText>{overview}</OverviewText>
          </ModalContent>
        </Modal>
      </ModalWrapper>
    </ModalContainer>
  );
};