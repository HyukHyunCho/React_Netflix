import React from "react";
import {
  Headers,
  BannerContent,
  BannerTitle,
  Banneroverview,
  BannerButton,
  Button,
} from "./styles";

export default function Banner({ movie, movieClick, setIsClicked }) {
  return (
    <Headers path={movie.backdrop_path}>
      <BannerContent>
        <BannerTitle>
          {movie.title || movie.name || movie.original_name}
        </BannerTitle>
        <Banneroverview>{movie.overview}</Banneroverview>
        <BannerButton>
          <Button
            color="black"
            background="white"
            onClick={() => setIsClicked(true)}
          >
            ▶ 재생
          </Button>
          <Button color="white" onClick={() => movieClick(movie)}>
            상세 정보
          </Button>
        </BannerButton>
      </BannerContent>
    </Headers>
  );
}