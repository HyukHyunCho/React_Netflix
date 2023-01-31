import styled from "styled-components";

export const ModalContainer = styled.div`
  z-index: 10000;
  position: absolute;
`;
export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0px;
  display: flex;
  justify-content: center;
  padding: 30px;
  background: rgba(0, 0, 0, 0.8);
`;
export const Modal = styled.div`
  position: relative;
  max-width: 800px;
  box-shadow: 0px 3px 5px - 1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background: #111;
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease -in -out 2s;
  animation: fadeIn 400ms;
  overflow: auto;
`;
export const ModalClose = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 5px;
  cursor: pointer;
  z-index: 1000;
  color: white;
  font-size: 20px;
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
`;
export const Title = styled.div`
  position: absolute;
  top: 290px;
  left: 50px;
  font-size: 35px;
  font-weight: bold;
  color: #fff;
`;
export const PlayButton = styled.button`
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
export const ModalContent = styled.div`
  padding: 40px;
  color: white;
`;
export const Detail = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;
export const PersentText = styled.div`
  font-weight: bold;
  color: #46d369;
`;
export const NomalText = styled.div`
  font-weight: bold;
  margin-left: 10px;
`;
export const OverviewText = styled.div`
  font-weight: bold;
`;