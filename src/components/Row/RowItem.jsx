import React from "react";
import { RowNomalItem } from "./styles";
import "react-multi-carousel/lib/styles.css";

export default function Row({ movie, movieClick }) {
  return (
    <RowNomalItem
      key={movie.id}
      alt={movie.name}
      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      onClick={() => movieClick(movie)}
    />
  );
}
