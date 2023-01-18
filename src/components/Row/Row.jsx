import React, { useState } from 'react'
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieModal from "../Modal/MovieModal";
import { useQuery } from '@tanstack/react-query';
import { MovieData } from "../../api/axios";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 5,
    slidesToSlide: 5,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 3,
    slidesToSlide: 3,
  },
};

export default function Row({title, id, fetchUrl}) {

  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  
  const {
    data: movieData,
    isLoading,
    error,
  } = useQuery(["movieData", id], () => MovieData(fetchUrl));

  console.log(movieData);

  const movieClick = (movie) => {
    console.log(movie);
    setModalOpen(true);
    setMovieSelected(movie);
  };

  if (isLoading) return <div style={{color: "#fff"}}>로딩</div>;
  if (error) return <div style={{ color: "#fff" }}>error</div>;
  
  return (
    <RowContainer>
      <Title>{title}</Title>
      <Carousel
        draggable={false}
        responsive={responsive}
        // centerMode={true}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-50-px"
      >
        {movieData.map(movie => (
          <RowItem
            key={movie.id}
            alt={movie.name}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            onClick={() => movieClick(movie)}
          ></RowItem>
        ))}
      </Carousel>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </RowContainer>
  );
}

const Title = styled.div`
  font-size: 3.2vh;
  text-style: bold;
  color: #fff;
  padding: 5px;
`

const RowContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-left: 50px;
  box-sizing: border-box;
  background: #000;
  @media screen and (max-width: 1024px) {
    padding-left: 30px;
  }
`;

// padding: 30px;
const RowItem = styled.img`
  display: flex;
  width: 11.3vw;
  border-radius: 17px;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.2);
    transition: .5s;
  }
  @media screen and (max-width: 1024px) {
    width: 17.5vw;
  }
  @media screen and (max-width: 800px) {
    width: 28vw;
  }
`;
