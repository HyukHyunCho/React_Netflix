import React from "react";
import { RowSearchItem } from "./styles";
import "react-multi-carousel/lib/styles.css";

export default function RowSearch({ movie }) {
  return (
    <RowSearchItem
      key={movie.id}
      alt={movie.name}
      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    />
  );
}
