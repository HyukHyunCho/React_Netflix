import React from "react";
import styled from "styled-components";
import { useMovieData } from "../../hooks/useMovie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from "../Spinner/Spinner";
import number_1 from "../../assets/image/number_1.svg";
import number_2 from "../../assets/image/number_2.svg";
import number_3 from "../../assets/image/number_3.svg";
import number_4 from "../../assets/image/number_4.svg";
import number_5 from "../../assets/image/number_5.svg";
import number_6 from "../../assets/image/number_6.svg";
import number_7 from "../../assets/image/number_7.svg";
import number_8 from "../../assets/image/number_8.svg";
import number_9 from "../../assets/image/number_9.svg";
import Empty from "../Empty/Empty";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1100 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1100, min: 800 },
    items: 4,
    slidesToSlide: 4,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 3,
    slidesToSlide: 3,
  },
};

const imgArr = [
  {
    src: number_1,
  },
  {
    src: number_2,
  },
  {
    src: number_3,
  },
  {
    src: number_4,
  },
  {
    src: number_5,
  },
  {
    src: number_6,
  },
  {
    src: number_7,
  },
  {
    src: number_8,
  },
  {
    src: number_9,
  },
];

export default function Row({ title, id, fetchUrl, movieClick, isLankRow }) {
  
  const {
    data: movieData,
    isLoading,
    isError,
    error,
  } = useMovieData(id, fetchUrl);

  if (isLoading) return <Spinner />;
  if (isError) return <Empty>{error.message}</Empty>;

  return (
    <RowContainer>
      <Title>{title}</Title>
      <Carousel
        draggable={true}
        responsive={responsive}
        // centerMode={true}
        infinite={true}
        keyBoardControl={true}
      >
        {movieData !== undefined &&
          movieData.map((movie, index) =>
            isLankRow ? (
              <RowLankContainer key={movie.id}>
                <RowImgContainer>
                  {index < 9 && (
                    <RowLankNumber
                      key={movie.id}
                      alt={movie.name}
                      src={imgArr[index].src}
                      onClick={() => movieClick(movie)}
                    />
                  )}
                </RowImgContainer>
                <RowImgContainer key={movie.id}>
                  <RowLankItem
                    key={movie.id}
                    alt={movie.name}
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    onClick={() => movieClick(movie)}
                  />
                </RowImgContainer>
              </RowLankContainer>
            ) : (
              movie.backdrop_path &&
              <RowItem
                key={movie.id}
                alt={movie.name}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                onClick={() => movieClick(movie)}
              />
            )
          )}
      </Carousel>
    </RowContainer>
  );
}

const RowContainer = styled.div`
  position: relative;
  top: -120px;
  width: 100%;
  padding: 2.5rem;
  box-sizing: border-box;
`;
const Title = styled.div`
  padding: 5px;
  font-size: 1.5rem;
  text-style: bold;
  color: #fff;
`;
const RowLankContainer = styled.div`
  display: flex;
  width: 100%;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
const RowImgContainer = styled.div`
  width: 50%;
  z-index: 100;
`;
const RowLankNumber = styled.img`
  position: absolute;
  width: 69%;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
const RowLankItem = styled.img`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
`;
const RowItem = styled.img`
  width: 95%;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
