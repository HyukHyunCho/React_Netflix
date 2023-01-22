import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { MovieSearchData } from '../api/axios';
import Spinner from '../components/Spinner/Spinner';
import styled from "styled-components";

export default function Search() {

  const useParam = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useParam();
  const searchKey = query.get("q");

  const {
    data: movieData,
    isLoading,
    error,
    refetch,
  } = useQuery(["searchData"], () => MovieSearchData(searchKey), {
    retry: 0,
  });

  useEffect(() => {
    refetch();
  }, [searchKey]);

  console.log(movieData);
  
  if (isLoading) return <Spinner />;
  if (error) return <div>error</div>;

  return (
    <Container>
      {movieData.length > 0 ? (
        <RowContainer>
          
            {movieData.map(movie => (
              <RowItem
                key={movie.id}
                alt={movie.name}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />
            ))}
         
        </RowContainer>
      ) : (
        <div style={{ color: "#000" }}>없음</div>
      )}
    </Container>
  );

}
// flex-wrap: wrap;
//   justify-content: center;
const Container = styled.div`
  display: flex;
  background-color: #000;
`;
const RowContainer = styled.div`
  padding: 125px;
`;

const RowItem = styled.img`
  width: 15vw;
  border-radius: 5px;
  cursor: pointer;
  margin: 30px 5px;
`;