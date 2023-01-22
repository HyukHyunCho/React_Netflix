import React from 'react'
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from '@tanstack/react-query';
import { MovieData } from "../../services/axios";
import Spinner from '../Spinner/Spinner';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6,
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

export default function Row({title, id, fetchUrl, movieClick}) {

  const {
    data: movieData,
    isLoading,
    error,
  } = useQuery(["movieData", id], () => MovieData(fetchUrl), {
    retry: 0,
  });

  if (isLoading) return <Spinner />;
  if (error) return <div>error</div>;
  
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
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            onClick={() => movieClick(movie)}
          ></RowItem>
        ))}
      </Carousel>
    </RowContainer>
  );
}

const RowContainer = styled.div`
  position: relative;
  top: -120px;
  width: 100%;
  padding-top: 40px;
  padding-left: 50px;
  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
    padding-left: 30px;
  }
`;
const Title = styled.div`
  font-size: 1.2rem;
  text-style: bold;
  color: #fff;
  padding: 5px;
`;
const RowItem = styled.img`
  display: flex;
  width: 15.3vw;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: .5s;
  }
  @media screen and (max-width: 1100px) {
    width: 22.8vw;
  }
  @media screen and (max-width: 800px) {
    width: 30vw;
  }
`;
