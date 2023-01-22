import React from 'react'
import styled from "styled-components";

export default function Video({ movie }) {
  return (
    <Container>
      <HomeContainer>
        <Iframe
          src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
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
const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  border: none;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    heightL 100%;
  }
`;
