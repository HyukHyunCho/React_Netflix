import React from "react";
import {
  RowLankContainer,
  RowImgContainer,
  RowLankNumber,
  RowLankItem,
} from "./styles";
import "react-multi-carousel/lib/styles.css";

export default function RowLank({ movie, index, imgArr, movieClick }) {
  return (
    <RowLankContainer key={movie.id}>
      <RowImgContainer>
        {index < 9 && (
          <RowLankNumber
            alt={movie.name}
            src={imgArr[index].src}
            onClick={() => movieClick(movie)}
          />
        )}
      </RowImgContainer>
      <RowImgContainer key={movie.id}>
        <RowLankItem
          alt={movie.name}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          onClick={() => movieClick(movie)}
        />
      </RowImgContainer>
    </RowLankContainer>
  );
}
