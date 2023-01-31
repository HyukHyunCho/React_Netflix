import React from "react";
import { Container, HomeContainer, Iframe } from "./styles";

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
