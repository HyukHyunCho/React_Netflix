import React from "react";
import { Layout, Title } from "../components/Row/styles";
import { useMovieData } from "../hooks/useMovie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from "../components/Spinner";
import number_1 from "../assets/image/number_1.svg";
import number_2 from "../assets/image/number_2.svg";
import number_3 from "../assets/image/number_3.svg";
import number_4 from "../assets/image/number_4.svg";
import number_5 from "../assets/image/number_5.svg";
import number_6 from "../assets/image/number_6.svg";
import number_7 from "../assets/image/number_7.svg";
import number_8 from "../assets/image/number_8.svg";
import number_9 from "../assets/image/number_9.svg";
import Empty from "../components/Empty";
import RowLank from "../components/Row/RowLank";
import RowItem from "../components/Row/RowItem";

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

export default function RowContainer({ id, title, fetchUrl, movieClick, isLankRow }) {
  const {
    data: movieData,
    isLoading,
    isError,
    error,
  } = useMovieData(id, fetchUrl);
  
  if (isLoading) return <Spinner />;
  if (isError) return <Empty>{error.message}</Empty>;

  return (
    <Layout>
      <Title>{title}</Title>
      <Carousel
        draggable={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
      >
        {movieData !== undefined &&
          movieData.map((movie, index) =>
            isLankRow ? (
              <RowLank
                key={movie.id}
                movie={movie}
                index={index}
                imgArr={imgArr}
                movieClick={movieClick}
              />
            ) : (
              movie.backdrop_path && (
                <RowItem
                  key={movie.id}
                  movie={movie}
                  movieClick={movieClick}
                />
              )
            )
          )}
      </Carousel>
    </Layout>
  );
}
