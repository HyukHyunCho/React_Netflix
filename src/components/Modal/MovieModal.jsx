import React from 'react'
import styled from "styled-components";

export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <Modal>
          <ModalClose
            onClick={() => setModalOpen(false)}
            className="modal-close"
          >
            X
          </ModalClose>
          <Image
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="image"
          />
          <Title>{title ? title : name}</Title>
          <PlayButton>▶ 재생</PlayButton>
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

const ModalContainer = styled.div`
  z-index: 1200;
  position: absolute;
`;

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgb(0 0 0 / 71 %);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: center;
`;

const Modal = styled.div`
  position: relative;
  max-width: 800px;
  box-shadow: 0px 3px 5px - 1px rgba(0, 0, 0, 0.2),
  0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background: #111;
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease -in -out 2s;
  animation: fadeIn 400ms;
`;

const ModalClose = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 5px;
  cursor: pointer;
  z-index: 1000;
  color: white;
  font-size: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  position: absolute;
  top: 290px;
  left: 50px;
  font-size: 35px;
  font-weight: bold;
  color: #fff;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 360px;
  left: 50px;
  height: 6vh;
  width: 120px;
  min-width: 90px;
  
  font-size: 18px;
  border: 1px solid #fff;
  border-radius: 5px;
`;

const ModalContent = styled.div`
  padding: 40px;
  color: white;
`;

const Detail = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;

const PersentText = styled.div`
  font-weight: bold;
  color: #46d369;
`

const NomalText = styled.div`
  font-weight: bold;
  margin-left: 10px;
`;

const OverviewText = styled.div`
  font-weight: bold;
`;
// .modal_user - perc {
    
//     color: #46d369;
// }






// .modal_title {

//     padding: 0;
//     font - size: 40px;
//     margin: 16px 0;
// }

// .modal_details {
//     font - weight: 600;
//     font - size: 18px;
// }

// modal_overview {
//     font - size: 20px;
//     line - height: 1.5;
// }


// .modal:: webkit - scrollbar{
//     display: none;
//     visibility: hidden;
// }

// .modal {
//     -ms - overflow - style: none; // IE and Edge
//     scrollbar - width: none;
// }





// @media screen addEventListener(max - height: 768px) {
//     .wrapper - modal {
//         align - items: unset;
//         padding - top: 2rem;
//     }
//     .modal {
//         overflow - y: scroll;
//     }
// }
// @media screen and(max - width: 768) {
//     .modal_overview {
//         font - size: 16px;
//     }
//     .modal_details {
//         font - size: 16px;
//     }
//     .wrapper - modal {
//         padding: 0;
//     }
//     .modal {
//         overflow - y: scroll!important;
//     }
// }
// @keyframes fadeIn {
//     from {
//         opacity: 0;
//         transform: scale(0.5);
//     }
//     to {
//         opacity: 1;
//         transform: scale(1);
//     }
// }